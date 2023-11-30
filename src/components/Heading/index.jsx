import Image from "next/image";

export default function Header({
  logo,
  title = "Evento",
  subtitle,
  description,
}) {
  return (
    <div className="px-4 py-2 my-5 text-center">
      <Image
        src={logo}
        width={150}
        height={150}
        className="d-block mx-auto mb-4"
        alt="Logo do Evento"
      />
      <h1 className="display-6 fw-bold text-body-emphasis">{title}</h1>
      <h2 className="h3 fw-bold text-body-emphasis mb-4">{subtitle}</h2>
      <div className="col-lg-9 mx-auto">
        <p className="lead mb-3">{description}</p>
      </div>
    </div>
  );
}
