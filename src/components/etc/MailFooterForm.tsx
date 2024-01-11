import { FormEvent, useState } from "react";

export default function Form() {
  const [mailFooter, setMailFooter] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/mailfooter", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.htmlInlined) {
      setMailFooter(data.htmlInlined);
    }

    const prevElement = document.getElementById("preview-mailfooter");
    if (prevElement) {
      prevElement.innerHTML = mailFooter;
    }
    const elementCode = document.getElementById("mailfooter-code");
    if (elementCode) {
      elementCode.innerText = mailFooter;
    }
  }

  return (
    <form onSubmit={submit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md">
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
        Name
        <input type="text" id="name" name="name" autoComplete="name" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </label>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
        Email
        <input type="email" id="email" name="email" autoComplete="email" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </label>
      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
        Phone
        <input type="tel" id="phone" name="phone" autoComplete="tel" required className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      </label>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Send
      </button>

      <div>
        <h4 className="mt-8 text-lg font-semibold">Footer Preview</h4>
        <div id="preview-mailfooter" className="preview-container mt-2 p-4 rounded-md"></div>
      </div>
      <div>
        <h4 className="mt-8 text-lg font-semibold">Footer Code</h4>
        <div id="mailfooter-code" className="code-container mt-2 p-4 rounded-md"></div>
      </div>
    </form>
  );
}