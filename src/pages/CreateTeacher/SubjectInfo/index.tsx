import { useState, useRef, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import BlackDocIcon from "@/assets/images/black-doc-icon.svg?react";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/images/search-icon.svg?react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import ArrowIcon from "@/assets/images/arrow-icon.svg?react";
import XIcon from "@/assets/images/x-icon.svg?react";
import { useSubjects } from "@/hooks/api/subject";
import { useAddTeacher } from "@/hooks/api/teacher";
import Swal from "sweetalert2";
import type { Subject } from "@/types/subject";
const LOCAL_KEY = "subjectInfo";

const SubjectInfoForm = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { data: subjectData } = useSubjects();

  const teacher = useAddTeacher();

  const successAlert = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      // timer: 3000,
      timerProgressBar: true,
      showCloseButton: true,

      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "info",
      title: "Müəllim uğurla əlavə edildi",
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    if (saved) {
      setSelectedItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(selectedItems));
  }, [selectedItems]);

  const toggleItem = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const removeItem = (id: string) => {
    setSelectedItems((prev) => prev.filter((item) => item !== id));
  };

  const filteredOptions = subjectData?.filter((item: Subject) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  const personalInfo = JSON.parse(
    localStorage.getItem("personalInfo") as string
  );
  const academicInfo = JSON.parse(
    localStorage.getItem("academicInfo") as string
  );
  const subjectInfo = JSON.parse(localStorage.getItem("subjectInfo") as string);

  const teacherPayload = {
    ...personalInfo,
    ...academicInfo,
    subjects: subjectInfo,
    status: true,
  };

  const handlePrev = () => {
    navigate({
      pathname: "/create-teacher",
      search: "?step=academic",
    });
  };

  const handleNext = () => {
    try {
      teacher.mutate(teacherPayload);
      navigate("/");
      localStorage.removeItem("personalInfo");
      localStorage.removeItem("academicInfo");
      localStorage.removeItem("subjectInfo");
      successAlert();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="p-6 rounded-lg flex flex-col h-full justify-between">
      <div>
        <div className="flex items-center space-x-3">
          <BlackDocIcon />
          <h2>Tədris etdiyi fənlər</h2>
        </div>

        <div className="relative w-[360px] mt-6" ref={containerRef}>
          {/* Trigger input */}
          <div className="relative">
            <Input
              type="text"
              placeholder={
                selectedItems.length > 0
                  ? `${selectedItems.length} seçildi`
                  : "Seçin"
              }
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setOpen(true)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <SearchIcon />
            </div>
          </div>

          {open && (
            <div className="absolute w-full mt-1 p-2 z-10 border rounded bg-white shadow-lg max-h-60 overflow-auto">
              {filteredOptions.length === 0 && (
                <p className="text-gray-500 p-2 text-sm">
                  Heç bir nəticə yoxdur
                </p>
              )}
              {filteredOptions.map((item: Subject) => {
                const checked = selectedItems.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleItem(item.id)}
                    className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded p-1"
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={() => toggleItem(item.id)}
                      className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600"
                    />
                    <Label>{item.label}</Label>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {selectedItems.length > 0 && (
          <ol className="mt-4 list-decimal list-inside space-y-1">
            {selectedItems.map((id, index) => {
              const item = subjectData?.find((opt: Subject) => opt.id === id);
              if (!item) return null;
              return (
                <li key={item.id} className="flex justify-between items-center">
                  <span>
                    {index + 1}. {item.label}
                  </span>
                  <button onClick={() => removeItem(item.id)}>
                    <XIcon />
                  </button>
                </li>
              );
            })}
          </ol>
        )}
      </div>
      <div className="flex justify-between pt-6">
        <Button
          variant="outline"
          type="button"
          className="px-4 py-2 border text-[#414651] rounded-md hover:bg-gray-100"
          onClick={handlePrev}
        >
          <div className="rotate-180">
            <ArrowIcon />
          </div>
          Geri
        </Button>
        <Button
          variant="outline"
          type="submit"
          className="px-4 py-2 text-[#414651] rounded-md hover:bg-gray-100"
          onClick={handleNext}
        >
          İrəli <ArrowIcon />
        </Button>
      </div>
    </section>
  );
};

export default SubjectInfoForm;
