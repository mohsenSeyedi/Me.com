import React, { useEffect } from "react";
import Box from "./Box";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n"
import { BiTimer } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';
import { BsPersonWorkspace } from 'react-icons/bs';
import { RiTeamLine ,RiEnglishInput } from 'react-icons/ri';
import { GiBurningBook , GiOpenBook} from 'react-icons/gi';

export default function SoftSkills() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="hardSkills"
      className="w-full flex items-center justify-center mt-40"
    >
      <div
        id="hardSkills-container"
        className="w-[95%] flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h4 className={`${i18n.language == "en" && "before:content-['HardSkills']"} header-text before:top-[-2rem]`}>
            {t("hardSkills.title")}
          </h4>
          <p className="text-center text-3xl mt-14">
          {t("hardSkills.subTitle")}
          </p>
        </div>
        <div
          id="hardSkills-boxes"
          className="grid grid-cols-2 gap-12 mt-24 md:grid-cols-1"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Box icon={<BiTimer className="mx-auto fill-yellow-color"/>} title={t("hardSkills.one")}></Box>
          <Box icon={<RiTeamLine className="mx-auto fill-yellow-color"/>} title={t("hardSkills.two")}></Box>
          <Box icon={<GiOpenBook className="mx-auto fill-yellow-color"/>} title={t("hardSkills.tree")}></Box>
          <Box icon={<BsPersonWorkspace className="mx-auto fill-yellow-color"/>} title={t("hardSkills.four")}></Box>
          <Box icon={<GiBurningBook className="mx-auto fill-yellow-color"/>} title={t("hardSkills.five")}></Box>
          <Box icon={<RiEnglishInput className="mx-auto fill-yellow-color"/>} title={t("hardSkills.six")}></Box>
        </div>
      </div>
    </div>
  );
}
