export default {
  async fetch(request, env, ctx) {
    const images = [
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/038.jpg?updatedAt=1751323362096" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/CD0.jpg?updatedAt=1751323358079" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/75E.png?updatedAt=1751323357862" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/E10.jpg?updatedAt=1751323357642" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/A88.jpg?updatedAt=1751323350871" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/EA9.jpg?updatedAt=1751323350851" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/75E.png?updatedAt=1751323357862" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/6F3.jpg?updatedAt=1751323350704" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/899.jpg?updatedAt=1751323350537" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/75E.png?updatedAt=1751323357862" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/A95.jpg?updatedAt=1751323350421" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/109.jpg?updatedAt=1751323349587" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/9EA.png?updatedAt=1751323348469" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/8B9.jpg?updatedAt=1751323335721" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/50E.jpg?updatedAt=1751323335293" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/75E.png?updatedAt=1751323357862" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/75E.png?updatedAt=1751323357862" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/9E4.jpg?updatedAt=1751323335290" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/34F.jpg?updatedAt=1751323335139" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/3E3.jpg?updatedAt=1751323334928" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/3AB.jpg?updatedAt=1751323334749" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/3E3.jpg?updatedAt=1751323334928" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/3AB.jpg?updatedAt=1751323334749" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/33D.jpg?updatedAt=1751324179677" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/BD8.jpg?updatedAt=1751324179931" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/833.jpg?updatedAt=1751324180453" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/0F4.jpg?updatedAt=1751324180456" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/9A7.jpg?updatedAt=1751324180576" },
      { src: "https://img-15.poringa.net/poringa/img/6/A/0/C/E/6/Crks6/093.jpg" },
      { src: "https://img-16.poringa.net/poringa/img/7/2/3/5/2/C/Crks6/34B.jpg" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/997.jpg?updatedAt=1751324183982" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/EE6.jpg?updatedAt=1751324183811" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/D2D.jpg?updatedAt=1751324183287" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/70E.jpg?updatedAt=1751324181032" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/C1A.jpg?updatedAt=1751324181755" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/5BB.jpg?updatedAt=1751324182060" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/997.jpg?updatedAt=1751324183982" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/04A.jpg?updatedAt=1751325066843" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/0E7.jpg?updatedAt=1751325068932" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/3C3.jpg?updatedAt=1751325072232" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/+.jpg?updatedAt=1751325078438" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/3C9.jpg?updatedAt=1751325078867" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/4C6.jpg?updatedAt=1751325083773" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/1CD.jpg?updatedAt=1751325086356" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/1C5.jpg?updatedAt=1751325093559" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/7B3.jpg?updatedAt=1751325098037" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/8ED.jpg?updatedAt=1751325101555" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/503.jpg.crdownload?updatedAt=1751325143182" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/17D.jpg?updatedAt=1751325165219" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/252.jpg?updatedAt=1751325178843" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/353.jpg?updatedAt=1751325179642" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/543.jpg?updatedAt=1751325195099" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/698.jpg?updatedAt=1751325207029" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/36A.jpg?updatedAt=1751325224985" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/A75.jpg?updatedAt=1751325226607" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/B4B.jpg?updatedAt=1751325251459" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/DBC.jpg?updatedAt=1751325252243" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/EF6.jpg?updatedAt=1751325255942" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/CE7.jpg?updatedAt=1751325257953" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/EC8.jpg?updatedAt=1751325267801" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/2BD.jpg?updatedAt=1751325278408" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/F5C.jpg?updatedAt=1751325290911" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/CF5.jpg?updatedAt=1751325297673" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/5A6.jpg?updatedAt=1751325330322" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/E94.jpg?updatedAt=1751325305202" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/A16.jpg?updatedAt=1751325307757" },
      { src: "https://ik.imagekit.io/nekoseduction/Ellen%20JOE/D7F.jpg?updatedAt=1751325340686" }
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    const response = {
      id: crypto.randomUUID(),
      ...randomImage
    };

    return new Response(JSON.stringify(response), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
