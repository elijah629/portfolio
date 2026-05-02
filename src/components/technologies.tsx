import {
  SiApple,
  SiArchlinux,
  SiBevy,
  SiBlender,
  SiBun,
  SiC,
  SiCloudflare,
  SiCplusplus,
  SiCss,
  SiElectron,
  SiFigma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGnubash,
  SiHtml5,
  SiIpfs,
  SiJavascript,
  SiLinux,
  SiLua,
  SiMarkdown,
  SiNeovim,
  SiNextdotjs,
  SiNixos,
  SiNodedotjs,
  SiNpm,
  SiRaspberrypi,
  SiReact,
  SiRust,
  SiSentry,
  SiSolid,
  SiSvg,
  SiTailwindcss,
  SiTauri,
  SiThreedotjs,
  SiTypescript,
  SiVscodium,
  SiVuedotjs,
  SiWebassembly,
} from "@icons-pack/react-simple-icons";

const icons = [
  { name: "Apple", Icon: SiApple },
  { name: "Arch Linux", Icon: SiArchlinux },
  { name: "Bash", Icon: SiGnubash },
  { name: "Bevy", Icon: SiBevy },
  { name: "Blender", Icon: SiBlender },
  { name: "Bun", Icon: SiBun },
  { name: "C", Icon: SiC },
  { name: "C++", Icon: SiCplusplus },
  { name: "Cloudflare", Icon: SiCloudflare },
  { name: "CSS", Icon: SiCss },
  { name: "Electron", Icon: SiElectron },
  { name: "Figma", Icon: SiFigma },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "HTML", Icon: SiHtml5 },
  { name: "IPFS", Icon: SiIpfs },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Linux", Icon: SiLinux },
  { name: "Lua", Icon: SiLua },
  { name: "Markdown", Icon: SiMarkdown },
  { name: "Neovim", Icon: SiNeovim },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "NixOS", Icon: SiNixos },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "npm", Icon: SiNpm },
  { name: "Raspberry Pi", Icon: SiRaspberrypi },
  { name: "React", Icon: SiReact },
  { name: "Rust", Icon: SiRust },
  { name: "Sentry", Icon: SiSentry },
  { name: "Solid", Icon: SiSolid },
  { name: "SVG", Icon: SiSvg },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Tauri", Icon: SiTauri },
  { name: "Three.js", Icon: SiThreedotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "VSCodium", Icon: SiVscodium },
  { name: "Vue", Icon: SiVuedotjs },
  { name: "WebAssembly", Icon: SiWebassembly },
];

export function Technologies() {
  return (
    <section
      className="my-6 w-full overflow-hidden border-y py-6 text-muted-foreground"
      aria-label="Technologies Eli works with"
    >
      <div className="tech-marquee flex w-max gap-10">
        <div className="flex min-w-max items-center justify-around gap-10 px-5">
          {icons.map(({ name, Icon }) => (
            <Icon aria-label={name} key={name} size={32} />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex min-w-max items-center justify-around gap-10 px-5"
        >
          {icons.map(({ name, Icon }) => (
            <Icon key={`${name}-repeat`} size={32} />
          ))}
        </div>
      </div>
    </section>
  );
}
