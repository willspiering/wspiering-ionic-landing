import Image from "next/image";

const FeatureItem = ({ icon, heading, text }) => {
  return (
    <article className="flex items-start gap-6 text-left align-top">
      <Image src={icon} width={48} height={48} layout="fixed" />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-text-dark">{heading}</h3>
        <p className="mt-2 ">{text}</p>
      </div>
    </article>
  );
};

export default FeatureItem;
