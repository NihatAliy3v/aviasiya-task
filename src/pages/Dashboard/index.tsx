import { useState } from "react";
import { Link } from "react-router";
import { useTeachers } from "@/hooks/api/teacher";
import { Input } from "@/components/ui/input";
import SearchIcon from "@/assets/images/icons/search-icon.svg?react";
import UserAddIcon from "@/assets/images/icons/user-white-add.svg?react";
import DashboardTable from "./Table";
import DetailModal from "./DetailModal";
import Heading  from "./Heading";
import type { Teacher } from "@/types/teacher";

const Dashboard = () => {
  const { data: teacherData } = useTeachers();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const filteredTeachers = teacherData?.filter((item:Teacher) => {
    const fullName =
      `${item.firstName} ${item.lastName} ${item.fatherName}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      item.finCode?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <main>
      <section className="py-4">
        <div className="container">
          <Heading />
          <div className="py-4 flex justify-between items-center">
            <p>
              Tədris yükü statusu
              <span className="text-[#B54708] border border-[#FEDF89] rounded-md px-[8px] py-[2px] ml-4">
                Təsdiq gözləyir
              </span>
            </p>
            <div className="flex gap-4">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <SearchIcon />
                </span>
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Fin, ad və ya soyadı daxil edin"
                  className="w-full pl-10"
                />
              </div>

              <Link
                to="/search-teacher"
                className="bg-[#346cdc] text-white rounded-lg px-[14px] py-[8px] flex items-center space-x-2"
              >
                <UserAddIcon />
                <span>Müəllim əlavə et</span>
              </Link>
            </div>

          </div>
          <DashboardTable
            filteredTeachers={filteredTeachers}
            setSelectedTeacher={setSelectedTeacher}
          />
        </div>
      </section>

      {selectedTeacher && (
        <DetailModal
          selectedTeacher={selectedTeacher}
          setSelectedTeacher={setSelectedTeacher}
        />
      )}
    </main>
  );
};

export default Dashboard;
