import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import ArrowIcon from "@/assets/images/arrow-icon.svg?react";
import GraduateIcon from "@/assets/images/graduate-icon.svg?react";
import LangIcon from "@/assets/images/lang-icon.svg?react";
import { useNavigate } from "react-router";

type FormValues = {
  kafedra: string;
  elmiDerece: string;
  elmiAd: string;
  maxSaat: number;
  statVahidi: string;
  tedrisDilleri: string;
  xariciDil: string;
};

const AcademicInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      maxSaat: 750,
    },
  });

  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
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
            {...register("kafedra")}
            placeholder="Kafedra adı"
            className="w-full border rounded-md px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Elmi dərəcə</label>
          <select
            {...register("elmiDerece")}
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
            {...register("elmiAd")}
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
              {...register("maxSaat", { required: true })}
              className="w-full border rounded-md px-3 py-2"
            />
            {errors.maxSaat && (
              <p className="text-red-500 text-sm">Maksimal saat tələb olunur</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Ştat vahidi *</label>
            <select
              {...register("statVahidi", { required: true })}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Seçin</option>
              <option value="tam">Tam</option>
              <option value="yarim">Yarım</option>
            </select>
            {errors.statVahidi && (
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
            {...register("tedrisDilleri", { required: true })}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">Seçin</option>
            <option value="az">Azərbaycan dili</option>
            <option value="en">İngilis dili</option>
            <option value="ru">Rus dili</option>
          </select>
          {errors.tedrisDilleri && (
            <p className="text-red-500 text-sm">
              Tədris apardığı dillər tələb olunur
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Xarici dil bilikləri</label>
          <select
            {...register("xariciDil")}
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
