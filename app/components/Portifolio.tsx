"use client";
import { User2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { place } from "../../public/assets/index";

const Portifolio = () => {
  /*   const port = [
    { id: "1", Work: "sodexo", Enterprise: "programmer" },
    { id: "2", Work: "teste", Enterprise: "programmer" },
    { id: "3", Work: "aqui", Enterprise: "programmer" },
  ]; */

  const port = [
    {
      id: "1",
      ImageSrc: "/assets/projects/ThumbOdyssey.png",
      ImageSrcFull: "/assets/projects/odysseyFull.png",
      NameProject: "Odyssey",
      Badge: ["react", "next", "tailwind"],
      Desc: "🌟 Explore o Odyssey: Uma Jornada Sem Limites 🌍 ",
      Link: "",
    },
    {
      id: "2",
      ImageSrc: "/assets/projects/ThumbMeow.png",
      ImageSrcFull: "/assets/projects/meowFull.png",
      NameProject: "Meow Café",
      Badge: ["next", "tailwind"],
      Desc: "☕ Meow Cafe: Onde Café e Tecnologia Se Encontram ☕ ",
      Link: "",
    },
    {
      id: "3",
      ImageSrc: "/assets/projects/Link.png",
      ImageSrcFull: "/assets/projects/Link.png",
      NameProject: "LinkHub",
      Badge: ["next", "tailwind"],
      Desc: "🚀 Apresentando o LinkHub - Simplificando a Gestão de Links Profissionais! 🌐",
      Link: "https://linktree-black-tau.vercel.app",
    },
  ];
  return (
    <section className="w-full flex flex-col p-16 gap-10">
      <div className="flex text-[#565656] ">
        <div className="border rounded-full items-center flex p-1 gap-2">
          <User2 size={15} />
          <h1 className="font-normal text-xs">PROJECT</h1>
        </div>
      </div>
      <div className="">
        <h1 className="font-normal text-6xl text-[#fff] mb-10">
          Featured <span className="text-primary-color">Project</span>
        </h1>
        <div className="grid grid-cols-2">
          {port.map((props) => (
            <div key={props.id}>
              <button
                onClick={() => {
                  const dialogElement = document.getElementById(
                    props.id
                  ) as HTMLDialogElement | null;

                  if (dialogElement) {
                    dialogElement.showModal();
                  }
                }}
              >
                <div className="card w-96 bg-base-100 shadow-xl gap-5 mt-5">
                  <figure>
                    <Image
                      src={props.ImageSrc}
                      alt=""
                      width={300}
                      height={300}
                      className="w-full h-[150px]"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{props.NameProject}</h2>
                    <div className="card-actions justify-end">
                      {props.Badge.map((badges) => (
                        <div key={badges} className="badge badge-outline">
                          {badges}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </button>
              <dialog id={props.id} className="modal">
                <div className="modal-box">
                  <Image
                    src={props.ImageSrcFull}
                    alt=""
                    width={1800}
                    height={3400}
                    className="w-full h-[500px] rounded-xl"
                  />
                  <h3 className="font-bold text-lg">{props.NameProject}!</h3>
                  <p className="py-4">{props.Desc}</p>
                  {props.Link && ( // Verifica se a propriedade Link está presente
                    <a href={props.Link}>
                      <button className="btn btn-outline ">Live Project</button>
                    </a>
                  )}
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portifolio;
