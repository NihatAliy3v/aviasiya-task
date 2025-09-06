import UserAvatar from "@/assets/images/user-avatar.svg?react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DetailModal = ({setSelectedTeacher,selectedTeacher}) => {
  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="flex-1 backdrop-blur-sm bg-black/30"
        onClick={() => setSelectedTeacher(null)}
      ></div>

      <div className="w-1/3 bg-white shadow-lg p-6 overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-base font-semibold">Müəllim Detalları</h2>
          <button
            onClick={() => setSelectedTeacher(null)}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>
        <div className="flex items-center gap-2">
          <UserAvatar />
          <div>
            <div className="flex gap-2 items-center">
              <span>Nigar Rəhimova Tural</span>
              <span className="text-#B42318 border border-red-500 bg-red-50 p-1 rounded-lg text-sm">
                Əmr yoxdur
              </span>
            </div>

            <div className="flex gap-2">
              <span className="border border-gray-500  p-1 rounded-lg text-xs">
                0,5 ştat
              </span>
              <span className="border border-gray-500  p-1 rounded-lg text-xs">
                saat hesabı
              </span>
            </div>
          </div>
        </div>
        <div>
          <Tabs defaultValue="account" className="">
            <TabsList className="my-3">
              <TabsTrigger value="personalTab" autoFocus>
                Şəxsi məlumat
              </TabsTrigger>
              <TabsTrigger value="academicTab">Akademik məlumat</TabsTrigger>
              <TabsTrigger value="subjectTab">Fənlər</TabsTrigger>
              <TabsTrigger value="docTab">Sənədlər</TabsTrigger>
            </TabsList>
            <TabsContent value="personalTab">
              <ul className="text-[#414651] flex flex-col gap-2">
                <li className="flex justify-between">
                  <span className="font-medium">Ad</span>{" "}
                  <span>{selectedTeacher.firstName}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Soyad</span>{" "}
                  <span>{selectedTeacher.lastName}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Ata adı</span>{" "}
                  <span>{selectedTeacher.fatherName}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Cinsi</span>{" "}
                  <span>{selectedTeacher.gender}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Doğum tarixi</span>{" "}
                  <span>{selectedTeacher.birthdate}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">ŞV seriya</span>{" "}
                  <span>{selectedTeacher.seriaNo}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Finkod</span>{" "}
                  <span>{selectedTeacher.finCode}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">İstifadəçi adı</span>{" "}
                  <span>{selectedTeacher.userName}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Vətəndaşlıq</span>{" "}
                  <span>{selectedTeacher.citizenship}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sosial statusu</span>{" "}
                  <span>{selectedTeacher.socialStatus}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Sosial vəziyyəti</span>{" "}
                  <span>{selectedTeacher.social}</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Hərbi status</span>{" "}
                  <span>
                    {selectedTeacher.militaryStatus ? "Var" : "Yoxdur"}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Əlillik status</span>{" "}
                  <span>
                    {selectedTeacher.disabilityStatus ? "Var" : "Yoxdur"}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">İşə başlama tarixi</span>{" "}
                  <span>
                    <span>{selectedTeacher.startTime}</span>
                  </span>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="academicTab">Akademik</TabsContent>
            <TabsContent value="subjectTab">Fennler</TabsContent>
            <TabsContent value="docTab">Senedler</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
