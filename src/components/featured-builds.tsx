import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ChairModel } from "@/components/chair-model";
import { site } from "@/data/site";
import chair from "@/images/the-chair.png";
import vexIdScan from "@/images/vexid-scan.webp";
import vexIdTracking from "@/images/vexid-tracking.webp";
import vexIdUi from "@/images/vexid-ui.webp";

const LinkButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition hover:border-primary hover:text-primary"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
    <ExternalLink className="size-4" />
  </Link>
);

export function FeaturedBuilds() {
  return (
    <section className="w-full px-6 py-20" id="featured-builds">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-4xl text-4xl font-bold md:text-6xl">
          Build logs, measurements, failed parts, and working revisions.
        </h2>

        <article className="mt-10 overflow-hidden rounded-xl border bg-secondary/20">
          <Image
            alt="CAD rendering and build overview for Eli Özcan's motorized VEX chair"
            className="aspect-[2/1] w-full border-b object-cover"
            priority
            src={chair}
          />
          <div className="grid gap-8 p-6 md:p-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="font-mono text-sm text-primary">
                STARDANCE 2026 · SUPER STAR
              </p>
              <h3 className="mt-2 text-4xl font-bold">The Chair</h3>
              <dl className="mt-6 grid grid-cols-2 gap-4 font-mono text-sm">
                <div>
                  <dt className="text-muted-foreground">Public devlogs</dt>
                  <dd className="mt-1 text-2xl">9</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Logged time</dt>
                  <dd className="mt-1 text-2xl">23h</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Drive motors</dt>
                  <dd className="mt-1 text-2xl">8</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Target speed</dt>
                  <dd className="mt-1 text-2xl">3.57 mph</dd>
                </div>
              </dl>
              <ChairModel />
            </div>
            <div className="space-y-5 leading-7 text-muted-foreground">
              <p>
                I turned a rolling classroom chair into a VEX V5 vehicle. I
                started by measuring the angled seat base, replacing an early
                bent-metal mount with a CAD-designed and 3D-printed bracket,
                then building the frame from VEX C-channel. The drivetrain uses
                four 200 RPM motors per side and a 72:48 gear ratio. My initial
                calculation estimated 24.8 lbf of pushing force.
              </p>
              <p>
                The devlogs show the actual iteration: inaccurate caliper
                measurements, a gear larger than its wheel, drivetrain contact
                problems, steering-wheel wobble, and rebuilt supports. I
                programmed an encoder-based steering wheel with return-to-center
                resistance, a HUD plan, battery telemetry, an ignition/unlock
                flow, dual-button drive input, and emergency-stop safety.
              </p>
              <p>
                This matters more than a finished glamour shot. It records how I
                selected gearing, fabricated mounts, found interference, changed
                geometry, added safety constraints, and got a full drivetrain
                moving under program control.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <LinkButton href={site.stardanceChair}>
                  Read all devlogs
                </LinkButton>
                <LinkButton href="https://github.com/gmhs-robotics/the-chair">
                  <SiGithub className="size-4" />
                  Source + CAD
                </LinkButton>
                <LinkButton href={site.chairReel}>Build reel</LinkButton>
              </div>
            </div>
          </div>
        </article>

        <article className="mt-8 rounded-xl border bg-secondary/20 p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="font-mono text-sm text-primary">
                STARDANCE 2026 · 3 DEVLOGS · 4H
              </p>
              <h3 className="mt-2 text-4xl font-bold">vexID</h3>
              <div className="mt-5 space-y-4 leading-7 text-muted-foreground">
                <p>
                  I built an ML-assisted VEX V5 parts identification and
                  inventory system. Goal: point a phone at stored parts,
                  identify them, and attach useful inventory tags without
                  entering every variation by hand.
                </p>
                <p>
                  I expanded the training dataset with real samples, improved
                  tracking, and added grouped tags such as high-strength gears.
                  On iOS I worked on 3D scanning, fixed missing mesh triangles,
                  and moved AprilTag raycasts from a flat AR plane to the
                  captured mesh. Latest pass improved UI and performance;
                  scanning works, though mesh processing still needs tuning.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <LinkButton href={site.stardanceVexId}>
                  See screenshots + devlogs
                </LinkButton>
                <LinkButton href={site.stardance}>Stardance profile</LinkButton>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Image
                alt="vexID part tracking screenshot"
                className="col-span-2 rounded-lg border"
                src={vexIdTracking}
              />
              <Image
                alt="vexID iOS interface screenshot"
                className="rounded-lg border"
                src={vexIdUi}
              />
              <Image
                alt="vexID 3D scan and AprilTag screenshot"
                className="rounded-lg border"
                src={vexIdScan}
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
