import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import ArrowIcon from "@/assets/images/arrow-icon.svg?react";
import GraduateIcon from "@/assets/images/graduate-icon.svg?react";
import LangIcon from "@/assets/images/lang-icon.svg?react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

type FormValues = {
  department: string;
  academicDegree: string;
  academicName: string;
  totalHour: number;
  stateUnit: string;
  languages: string;
  languageSkills: string;
};

const STORAGE_KEY = "academicInfo";

const AcademicInfo = () => {
  // LocalStorage-də saxlanan məlumatı oxu
  const savedData = localStorage.getItem(STORAGE_KEY);
  const defaultValues: Partial<FormValues> = savedData
    ? JSON.parse(savedData)
    : { totalHour: 750 }; // Əgər heç nə yoxdursa maxSaat default 750 olsun

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    defaultValues,
  });

  const navigate = useNavigate();

  // Form dəyişdikcə localStorage-də saxla
  const formValues = watch();
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formValues));
  }, [formValues]);

  const onSubmit = (data: FormValues) => {
    console.log("Academic Info:", data);
    navigate({
      pathname: "/create-teacher",
      search: "?step=subject",
    });
  };

  const handlePrev = () => {
    navigate({
      pathname: "/create-teacher",
      search: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto p-6 space-y-6 text-[#414651]"
    >
      {/* Akademik məlumatlar */}
      <div className="space-y-4">
        <h2 className="font-medium text-black flex items-center gap-2">
          <GraduateIcon /> Akademik məlumatlar
        </h2>

        <div className="space-y-2">
          <label className="text-[#414651] text-sm font-medium">
            Müəllimin əsas kafedrası
          </label>
          <input
            type="text"
            {...register("department")}
            placeholder="Kafedra adı"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Elmi dərəcə</label>
          <select
            {...register("academicDegree")}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Elmi dərəcə</option>
            <option value="phd">PhD</option>
            <option value="doktor">Doktor</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Elmi ad</label>
          <select
            {...register("academicName")}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Elmi ad</option>
            <option value="dosent">Dosent</option>
            <option value="professor">Professor</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Maksimal saat *</label>
            <input
              type="number"
              {...register("totalHour", { required: true })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.totalHour && (
              <p className="text-red-500 text-sm">Maksimal saat tələb olunur</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Ştat vahidi *</label>
            <select
              {...register("stateUnit", { required: true })}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Seçin</option>
              <option value="tam">Tam</option>
              <option value="yarim">Yarım</option>
            </select>
            {errors.stateUnit && (
              <p className="text-red-500 text-sm">Ştat vahidi tələb olunur</p>
            )}
          </div>
        </div>
      </div>

      {/* Dil bilikləri */}
      <div className="space-y-4">
        <h2 className="font-medium flex items-center gap-2 text-black">
          <LangIcon /> Dil bilikləri
        </h2>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Tədris apardığı dillər *
          </label>
          <select
            {...register("languages", { required: true })}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Seçin</option>
            <option value="az">Azərbaycan dili</option>
            <option value="en">İngilis dili</option>
            <option value="ru">Rus dili</option>
          </select>
          {errors.languages && (
            <p className="text-red-500 text-sm">
              Tədris apardığı dillər tələb olunur
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Xarici dil bilikləri</label>
          <select
            {...register("languageSkills")}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Seçin</option>
            <option value="az">Azərbaycan dili</option>
            <option value="en">İngilis dili</option>
            <option value="ru">Rus dili</option>
          </select>
        </div>
      </div>

      {/* Buttons */}
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
        >
          İrəli <ArrowIcon />
        </Button>
      </div>
    </form>
  );
};

export default AcademicInfo;
