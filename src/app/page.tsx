import Head from "next/head";

export default function Home() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/linenumbertwo",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/line_number__two/",
    },
  ];

  return (
    <>
      <Head>
        <title>Hoseon Lee</title>
      </Head>

      <div className="page-wrapper">
        <p className="greeting">Hey, there! 👋</p>
        <p className="myself">
          My name is <strong>Hoseon Lee</strong>.<br />
        </p>
        <p className="describe">
          I’m a Software Engineer. 💻
          <br />
          I’m living in Seoul. 🇰🇷
          <br />
          I’m interested in UI/UX. 🐶
          <br />
          I’m passionate about learning new things. 📝
          <br />
        </p>
        <hr className="divider" />
        <div>
          {links.map((link, index) => (
            <span key={link.name}>
              <a
                className="external-link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
              {index < links.length - 1 && " | "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
