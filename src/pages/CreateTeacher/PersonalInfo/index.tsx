import React from "react";
import { useForm } from "react-hook-form";
import PersonalIcon from "@/assets/images/personal-icon.svg?react";
import { Input } from "@/components/ui/input";
import Phone from "@/assets/images/phone.svg?react";
import { Button } from "@/components/ui/button";
import ArrowIcon from "@/assets/images/arrow-icon.svg?react";
import { useNavigate } from "react-router";

const PersonalInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    navigate({
      pathname: "/create-teacher",
      search: "?step=academic",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 p-6 border rounded-lg"
    >
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <PersonalIcon /> Şəxsi məlumatlar
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label>Ad</label>
          <Input {...register("ad")} className="border rounded px-3 py-2" />
        </div>
        <div className="flex flex-col">
          <label>Soyad</label>
          <Input {...register("soyad")} className="border rounded px-3 py-2" />
        </div>
        <div className="flex flex-col">
          <label>Ata adı</label>
          <Input {...register("ataAdi")} className="border rounded px-3 py-2" />
        </div>

        {/* Gender */}
        <div className="flex flex-col">
          <div>Cinsi <span className="text-red-800">*</span></div>
          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <Input type="radio" value="Kişi" {...register("cinsi", { required: true })} />
              Kişi
            </label>
            <label className="flex items-center gap-2">
              <Input type="radio" value="Qadın" {...register("cinsi", { required: true })} />
              Qadın
            </label>
          </div>
          {errors.cinsi && <span className="text-red-500 text-sm">Zəhmət olmasa seçin</span>}
        </div>

        {/* Required fields */}
        <div>
          <label>
            Doğum tarixi <span className="text-red-800">*</span>
          </label>
          <Input
            type="date"
            {...register("dogumTarixi", { required: true })}
            className="border rounded px-3 py-2"
          />
          {errors.dogumTarixi && (
            <span className="text-red-500 text-sm">Zəhmət olmasa daxil edin</span>
          )}
        </div>

        <div>
          <label>
            ŞV seriya nömrəsi <span className="text-red-800">*</span>
          </label>
          <Input
            {...register("svSeriyaNomresi", { required: true })}
            placeholder="ŞV seriya nömrəsi"
            className="border rounded px-3 py-2"
          />
          {errors.svSeriyaNomresi && (
            <span className="text-red-500 text-sm">Zəhmət olmasa daxil edin</span>
          )}
        </div>

        <div>
          <label>
            Finkod <span className="text-red-800">*</span>
          </label>
          <Input
            {...register("finkod", { required: true })}
            placeholder="Finkod"
            className="border rounded px-3 py-2"
          />
          {errors.finkod && (
            <span className="text-red-500 text-sm">Zəhmət olmasa daxil edin</span>
          )}
        </div>

        {/* Optional fields */}
        <div>
          <label>Vətəndaşlıq</label>
          <Input {...register("vetendasliq")} placeholder="Vətəndaşlıq" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>Ailə vəziyyəti</label>
          <Input {...register("aileVəziyyəti")} placeholder="Ailə vəziyyəti" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>Sosial vəziyyəti</label>
          <Input {...register("sosialVəziyyəti")} placeholder="Sosial vəziyyəti" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>Sosial status</label>
          <Input {...register("sosialStatus")} placeholder="Sosial status" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>İstifadəçi adı</label>
          <Input {...register("istifadeciAdi")} placeholder="İstifadəçi adı" className="border rounded px-3 py-2" />
        </div>

        {/* Hərbi status və Əlillik statusu */}
        <div className="flex gap-[68px]">
          <div className="col-span-3 flex flex-col gap-6">
            Hərbi status
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <Input type="radio" value="Bəli" {...register("herbiStatus")} /> Bəli
              </label>
              <label className="flex items-center gap-1">
                <Input type="radio" value="Xeyr" {...register("herbiStatus")} /> Xeyr
              </label>
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-6">
            Əlillik statusu
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <Input type="radio" value="Bəli" {...register("elillikStatusu")} /> Bəli
              </label>
              <label className="flex items-center gap-1">
                <Input type="radio" value="Xeyr" {...register("elillikStatusu")} /> Xeyr
              </label>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-semibold flex items-center gap-3">
        <Phone /> Əlaqə məlumatları
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label>Ünvan</label>
          <Input {...register("unvan")} placeholder="Ünvan" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>Qeydiyyat ünvanı</label>
          <Input {...register("qeydiyyatUnvani")} placeholder="Qeydiyyat ünvanı" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>Mobil nömrə</label>
          <Input {...register("mobilNomre")} placeholder="Mobil nömrə" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>Daxili nömrə</label>
          <Input {...register("daxiliNomre")} placeholder="Daxili nömrə" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>E-poçt</label>
          <Input type="email" {...register("email")} placeholder="E-poçt" className="border rounded px-3 py-2" />
        </div>
        <div>
          <label>İşə başlama tarixi</label>
          <Input type="date" {...register("isBaslamaTarixi")} className="border rounded px-3 py-2" />
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          variant="outline"
          type="submit"
          className="text-[#414651] px-6 py-2 rounded-lg flex items-center"
        >
          İrəli <ArrowIcon />
        </Button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;
