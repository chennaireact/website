const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const data = {
  sponsors: [
    {
      name: "Talentship",
      link: "https://talentship.io/en/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2Fiz9v2KcitkFrzz4I-ts.jpg",
    },
    {
      name: "Imagekit.io",
      link: "https://imagekit.io/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2F9mhiKMO2ofZQhSpV-Image_Editor.png",
    },
    {
      name: "WSO2",
      link: "https://wso2.com/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2F4Gf93DN1VAZitLnZ-wso2-logo-edited.png",
    },
    { name: "IBM", link: "#", image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FG6eivtm0z7wFWUKy-IBM_logo.png" },
    {
      name: "Yuniq",
      link: "https://yuniq.co/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FFVqmiMesQBlCZ0ZM-yuniq.jpg",
    },
    {
      name: "Think42 Labs",
      link: "https://www.think42labs.com/home",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FdL5OfWTZBrvyf3uc-thinklab.png",
    },
    {
      name: "FULL",
      link: "http://full.io/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FEfg7mLecX1PNacLz-full%2520(1).png",
    },
    {
      name: "Mahathaan",
      link: "https://mahathaan.com/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FzfzCqEqLDhzn3rir-mahathaan.png",
    },
    {
      name: "St. Joseph's Group",
      link: "https://stjosephsgroup.org/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FMcRttNlmyhOle2Gj-st.png",
    },
    {
      name: "7 Angle",
      link: "https://7angle.com/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2F85ujkBrdawmt5xKp-7angel.png",
    },
  ],
  partners: [
    {
      name: "React India",
      link: "https://www.reactindia.io/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FwxvMX7vyJ1A5U8NQ-react%2520india.png",
    },
    {
      name: "React Nexus",
      link: "https://reactnexus.com/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2F5kfOJOBGlaY1eaxP-react_nexus_logo.jpeg",
    },
    {
      name: "JS Lovers",
      link: "https://twitter.com/jslovers_del",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FN743ndtjCx0NjOfq-jslovers-logo.png",
    },
    {
      name: "GDG Chennai",
      link: "https://twitter.com/gdgchennai",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FX6CjS4G2P500vQ6M-dgd.png",
    },
    {
      name: "FOSS United Chennai",
      link: "https://fossunited.org/c/chennai",
      image:
        "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FfntqLXj7otY4vk9W-Screenshot%25202024-10-10%2520at%252011.18.04%25E2%2580%25AFPM.png",
    },
    {
      name: "TechXConf",
      link: "https://techxconf.com/",
      image:
        "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2Fn5n9lIq2JjjVj2hn-TechX%2520AI%2520Cloud%2520Conference%25202024%2520Header.png",
    },
    {
      name: "Global Freelance Festival",
      link: "https://makerstribe.in/events/global-freelancers-festival/",
      image:
        "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FenD9z629q2kFSrxc-Chennai%2520Freelancers%2520Club%2520Logo.jpeg",
    },
  ],
  team: [
    {
      name: "Nikhil Kumaran S",
      link: "https://www.linkedin.com/in/nikhilkumaran/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2F8mz6uWF7n5BDxVba-nikhil.jpeg",
    },
    {
      name: "Surya Venkat",
      link: "https://www.linkedin.com/in/suryavenky/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FVZTd8ngggCtyp33m-surya.jpeg",
    },
    {
      name: "Arul Kumar",
      link: "https://www.linkedin.com/in/arul-kumar-511058225/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2F9wi6vCY6NUSIxOe2-arul.jpeg",
    },
    {
      name: "Arun Kumar V",
      link: "https://www.linkedin.com/in/arunkumarvallal/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FKL7Wp4QnleTRAJif-PP.jpg",
    },
    {
      name: "Dhanush Kandhan",
      link: "https://www.linkedin.com/in/dhanushkandhan/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FzZG67hNSDVMfqcsE-dhanush.jpeg",
    },
    {
      name: "Namma Hari",
      link: "https://www.linkedin.com/in/nammahari/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FzFEEHWikxIymGC0W-hari.jpeg",
    },
    {
      name: "Jai Saravanan",
      link: "https://www.linkedin.com/in/jai-saravanan-dev/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FX7cZwo7edPtgHEUk-jai.jpeg",
    },
    {
      name: "Nithin Kamlesh",
      link: "https://www.linkedin.com/in/nithin-kamlesh/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2Fk6S6V0V9Nudbuq6Y-kamlesh.jpeg",
    },
    {
      name: "SB Praveen",
      link: "https://www.linkedin.com/in/sb-praveen-38423a154/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FJLKDiXxXr0Upu6z1-parveen.jpeg",
    },
    {
      name: "Shanthi Palani",
      link: "https://www.linkedin.com/in/shanthi-palani-0500a9100/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FMwjxCl0tJ4wMX5vU-shanthi.jpeg",
    },
    {
      name: "Justin Benito",
      link: "https://www.linkedin.com/in/justinbenito",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2F5IBYg168xuK7EoIN-justin.jpeg",
    },
    {
      name: "Sarvesh M Rao",
      link: "https://www.linkedin.com/in/sarvesh-m-rao/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FXKtm1iDrVmgoCo39-49156390.jpeg",
    },
    {
      name: "Chandramouli S",
      link: "https://www.linkedin.com/in/chandramouli05/",
      image: "https://storage.googleapis.com/creatorspace-public/users%2Fclylc5w1v070to301jatq0e85%2FC8wIzTJmy6PHZH3D-mouli.jpeg",
    },
  ],
};

const sanitize = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    // Check if url is valid
    if (!url) {
      return reject(new Error("Invalid URL"));
    }
    const cmd = `curl -L -o "${filepath}" "${url}"`;
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(filepath);
      }
    });
  });
};

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const processGroup = async (groupName, items) => {
  const dir = path.join(__dirname, "..", "public", groupName);
  ensureDir(dir);
  console.log(`Processing ${groupName}...`);

  for (const item of items) {
    if (!item.image) continue;

    // Guess extension from URL or header (curl handles content, but we need file extension)
    // Simple way: check URL path or assume .jpg if unknown
    let ext = path.extname(item.image.split("?")[0]);
    if (!ext || ext.length > 5) ext = ".jpg"; // Fallback

    const filename = sanitize(item.name) + ext;
    const filepath = path.join(dir, filename);

    try {
      await downloadImage(item.image, filepath);
      console.log(`Downloaded: ${filename}`);
      // Add local path for reference - relative to public
      item.localPath = `/${groupName}/${filename}`;
    } catch (e) {
      console.error(`Failed to download ${item.name}:`, e.message);
    }
  }
};

(async () => {
  try {
    await processGroup("sponsors", data.sponsors);
    await processGroup("partners", data.partners);
    await processGroup("team", data.team);
    console.log("Done!");
    // Output json for next steps
    console.log("FINAL_JSON_START");
    console.log(JSON.stringify(data, null, 2));
    console.log("FINAL_JSON_END");
  } catch (err) {
    console.error(err);
  }
})();
