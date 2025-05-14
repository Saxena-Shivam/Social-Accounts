import React, { useEffect } from "react";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import { Github, Linkedin, Twitter, Instagram, Code, Copy } from "lucide-react";
import "./App.css";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/", icon: <Github /> },
  { name: "LinkedIn", url: "https://www.linkedin.com/", icon: <Linkedin /> },
  { name: "Twitter", url: "https://twitter.com/", icon: <Twitter /> },
  { name: "Instagram", url: "https://www.instagram.com/", icon: <Instagram /> },
  { name: "Codeforces", url: "https://codeforces.com/", icon: <Code /> },
  { name: "CodeChef", url: "https://www.codechef.com/", icon: <Code /> },
  { name: "LeetCode", url: "https://leetcode.com/", icon: <Code /> },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/",
    icon: <Code />,
  },
];

const copyToClipboard = (url) => {
  navigator.clipboard.writeText(url);
  alert("URL copied to clipboard!");
};

export default function SocialLinksPage() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");
    const buttons = document.querySelectorAll("button");

    document.addEventListener("mousemove", (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
      follower.style.left = `${e.clientX}px`;
    });

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        cursor.style.display = "none";
        follower.style.display = "none";
        button.classList.add("hovered-button");
      });

      button.addEventListener("mouseleave", () => {
        cursor.style.display = "block";
        follower.style.display = "block";
        button.classList.remove("hovered-button");
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-8 relative overflow-hidden">
      <div className="cursor fixed w-3 h-3 bg-white rounded-full pointer-events-none z-50"></div>
      <div className="cursor-follower fixed w-10 h-10 border border-white rounded-full pointer-events-none z-50 transition-transform duration-300"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {socialLinks.map((link, index) => (
          <Card
            key={index}
            className="p-6 bg-gradient-to-br from-white to-gray-100 hover:from-purple-400 hover:to-pink-400 transition-all duration-300 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 flex flex-col items-center"
          >
            <div className="text-3xl mb-2 text-purple-600">{link.icon}</div>
            <p className="font-semibold text-lg mb-3 text-gray-800 hover:text-white">
              {link.name}
            </p>
            <Button
              className="w-full flex items-center justify-center gap-2 bg-gray-800 text-white hover:border hover:border-purple-600 hover:bg-transparent hover:text-purple-600"
              onClick={() => copyToClipboard(link.url)}
            >
              <Copy className="w-4 h-4" /> Copy URL
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
