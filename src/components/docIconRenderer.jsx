import React from "react";
import { ReactComponent as AEP } from "../Icons/AEP.svg";
import { ReactComponent as FIG } from "../Icons/FIG (Figma), Type=Solid.svg";
import { ReactComponent as DOCX } from "../Icons/DOCX, Type=Solid.svg";
import { ReactComponent as JPG } from "../Icons/JPG, Type=Solid.svg";
import { ReactComponent as MP4 } from "../Icons/MP4, Type=Solid.svg";
import { ReactComponent as PDF } from "../Icons/PDF, Type=Solid.svg";

const formatToIcon = {
  ".aep": AEP,
  ".jpg": JPG,
  ".fig": FIG,
  ".mp4": MP4,
  ".pdf": PDF,
  ".docx": DOCX,
};

const DocIconRenderer = ({ fileName }) => {
  console.log(fileName);
  if (!fileName) return null;

  const fileExtension = fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
  const IconComponent = formatToIcon[fileExtension];

  if (!IconComponent) return null;

  return <IconComponent />;
};

export default DocIconRenderer;
