import CalendaIcon from "../../assets/images/calendar-icon.svg?react";

const rows = [
  {
    fieldName: "No",
    size: 100,
  },
  {
    fieldName: "Ad Soyad Ata adi",
    size: 300,
  },
  {
    fieldName: "Cinsi",
    size: 150,
  },
  {
    fieldName: "Finkod",
    size: 200,
  },
  {
    fieldName: "Dogum tarixi",
    size: 200,
  },
  {
    fieldName: "Stat vahidi",
    size: 200,
  },
  {
    fieldName: "Cem saat",
    size: 80,
  },
  {
    fieldName: "Tedris apardiqi diller",
    size: 200,
  },
  {
    fieldName: "Esas kafedra",
    size: 200,
  },
  {
    fieldName: "Status",
    size: 200,
  },
];

const rowData = [
  {
    id: 1,
    firstName: "Aygun",
    lastName: "Aliyeva",
    fatherName: "Kamil",
    gender: "Qadin",
    fin: "4de5gye",
    birthDate: "23/11/1982",
    state: "0.5 stat",
    totalHour: 200,
    language: ["aze", "ru"],
    department: "Riyaziyyat",
    status: true,
  },
  {
    id: 2,
    firstName: "Aygun",
    lastName: "Aliyeva",
    fatherName: "Kamil",
    gender: "Qadin",
    fin: "4de5gye",
    birthDate: "23/11/1982",
    state: "0.5 stat",
    totalHour: 200,
    language: ["aze", "ru"],
    department: "Riyaziyyat",
    status: true,
  },
  {
    id: 3,
    firstName: "Aygun",
    lastName: "Aliyeva",
    fatherName: "Kamil",
    gender: "Qadin",
    fin: "4de5gye",
    birthDate: "23/11/1982",
    state: "0.5 stat",
    totalHour: 200,
    language: ["aze", "ru"],
    department: "Riyaziyyat",
    status: true,
  },
  {
    id: 4,
    firstName: "Aygun",
    lastName: "Aliyeva",
    fatherName: "Kamil",
    gender: "Qadin",
    fin: "4de5gye",
    birthDate: "23/11/1982",
    state: "0.5 stat",
    totalHour: 200,
    language: ["aze", "ru"],
    department: "Riyaziyyat",
    status: true,
  },
  {
    id: 5,
    firstName: "Aygun",
    lastName: "Aliyeva",
    fatherName: "Kamil",
    gender: "Qadin",
    fin: "4de5gye",
    birthDate: "23/11/1982",
    state: "0.5 stat",
    totalHour: 200,
    language: ["aze", "ru"],
    department: "Riyaziyyat",
    status: true,
  },
  {
    id: 6,
    firstName: "Aygun",
    lastName: "Aliyeva",
    fatherName: "Kamil",
    gender: "Qadin",
    fin: "4de5gye",
    birthDate: "23/11/1982",
    state: "0.5 stat",
    totalHour: 200,
    language: ["aze", "ru"],
    department: "Riyaziyyat",
    status: true,
  },
  {
    id: 7,
    firstName: "Aygun",
    lastName: "Aliyeva",
    fatherName: "Kamil",
    gender: "Qadin",
    fin: "4de5gye",
    birthDate: "23/11/1982",
    state: "0.5 stat",
    totalHour: 200,
    language: ["aze", "ru"],
    department: "Riyaziyyat",
    status: true,
  },
];

const Dashboard = () => {
  return (
    <main>
      <section className="py-4">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold text-2xl">
                Professor - muellim heyeti
              </h1>
              <p className="font-normal">
                Müəllim heyətinin idarə edilməsi və tədris yükünün təyin
                edilməsi.
              </p>
            </div>
            <div>
              <button className="border border-[#9BC6F5] text-[#2B58CA] font-semibold rounded-md py-[8px] px-[14px] flex gap-2 items-center">
                {/* <img src={calendarİcon} alt="calendar" /> */}
                <CalendaIcon />
                Novbeti il ucun hazirliq
              </button>
            </div>
          </div>
          <div className="py-4 flex justify-between items-center">
            <p>
              Tedris yuku statusu
              <span className="text-[#B54708] border border-[#FEDF89] rounded-md px-[8px] py-[2px] ml-4">
                Tesdiq gozleyir
              </span>
            </p>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Ad, soyad ve ya fin ile axtar..."
                className="border rounded-md p-2 "
              />
              <button className="bg-[#346cdc] text-white rounded-lg px-[14px] py-[8px]">
                Muellim elave et
              </button>
            </div>
          </div>

          <div className=" overflow-x-auto invisible-scrollbar w-[1100px]">
            <table className="border min-w-[1440px] text-sm">
              <thead>
                <tr className="border">
                  {rows.map((item, index) => (
                    <th
                      className={`border py-4 pl-5 text-left text-[#717680] `}
                      key={index}
                      style={{ width: `${item.size}px` }}
                    >
                      {item.fieldName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-medium">
                {rowData.map((item, index) => {
                  return (
                    <tr>
                      <td className=" py-4 pl-5">{item.id}</td>
                      <td className=" py-4 pl-5">
                        {item.firstName} {item.lastName} {item.fatherName}
                      </td>
                      <td className=" py-4 pl-5">{item.gender}</td>
                      <td className=" py-4 pl-5">{item.fin}</td>
                      <td className=" py-4 pl-5">{item.birthDate}</td>
                      <td className=" py-4 pl-5">{item.state}</td>
                      <td className=" py-4 pl-5">{item.totalHour}</td>
                      <td className=" py-4 pl-5">
                        {item.language.map((item) => {
                          return <span>{item}</span>;
                        })}
                      </td>
                      <td className=" py-4 pl-5">{item.department}</td>
                      <td className=" py-4 pl-5">
                        {item.status ? "Emr var" : "emr yoxdur"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
