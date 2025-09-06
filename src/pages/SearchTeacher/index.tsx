import { useState } from "react";
import UserAdd from "@/assets/images/user-add.svg?react";
import SearchIcon from "@/assets/images/search-icon.svg?react";
import InfoIcon from "@/assets/images/info-icon.svg?react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";
import { useTeachers } from "@/hooks/api/teacher";
import SearchTable from "./SearchTable";
import type { Teacher } from "@/types/teacher";




const SearchTeacher = () => {
  const { data: teachers } = useTeachers();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const filtered = teachers?.filter((item:Teacher) => {
      const fullName =
        `${item.firstName} ${item.lastName} ${item.fatherName}`.toLowerCase();
      return (
        fullName.includes(query.toLowerCase()) ||
        item.finCode?.toLowerCase().includes(query.toLowerCase())
      );
    });

    setResults(filtered);
  };

  return (
    <section>
      <div className="container">
        <div className="px-[16px] py-[24px] border rounded-lg w-[1160px] min-h-screen">
          <div className="py-5 mb-5 border-b">
            <Link
              to="/create-teacher"
              className="flex items-center gap-2 font-medium"
            >
              <UserAdd /> Yeni müəllim əlavə et
            </Link>
          </div>

          <div className="flex w-full items-start gap-2">
            <div className="w-full">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Fin, ad və ya soyadı daxil edin"
                  className="w-full pl-10"
                />
              </div>
              <p className="font-normal text-xs flex items-center gap-2 mt-2 text-[#535862]">
                <InfoIcon />
                FIN kod ilə axtarış daha dəqiq nəticələr göstərəcək
              </p>
            </div>
            <Button
              onClick={handleSearch}
              variant="outline"
              className="text-white bg-blue-600 hover:bg-blue-400 hover:text-white"
            >
              Axtar
            </Button>
          </div>

          {results?.length > 0 ? (
            <SearchTable results={results}/>
          ) : (
            <div className="flex flex-col items-center gap-5 mt-[100px]">
              <SearchIcon />
              <p className="font-normal text-sm text-[#535862]">
                Müəllimin adını, soyadını və ya FIN kodunu daxil edərək axtarışa
                başlayın
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SearchTeacher;
