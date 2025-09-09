import { v4 as uuid } from "uuid";
import { IFile } from "../interfaces";

export const fileTree: IFile = {
  id: uuid(),
  name: "EXPLORER",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [],
    },
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `interface IProps {}

const Button = ({}: IProps) => {
  return (
    <>
      <button>Click me!</button>
      <a
        href="https://www.linkedin.com/in/mohamed-elsheshtawey/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600"
      >
        Linkedin
      </a>
    </>
  );
}

export default Button`,
            },
            {
              id: uuid(),
              name: "ContactUs.tsx",
              isFolder: false,
              content: `interface ContactUsProps {}

const ContactUs = ({}: ContactUsProps) => {
  return (
    <div className="p-4 border rounded">
      <h2>Contact Us</h2>
      <form className="flex flex-col gap-2 mt-2">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" />
        <input type="email" placeholder="Your Email" className="border p-2 rounded" />
        <textarea placeholder="Your Message" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs`,
            },
          ],
        },
      ],
    },
    {
      name: "public",
      id: uuid(),
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "index.html",
          isFolder: false,
          content: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>M-ELSHESHTAWEY</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,
        },
      ],
    },
  ],
};
