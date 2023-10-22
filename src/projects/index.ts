import { Project } from "@/lib/project";
import bagel from "./bagel.yml";
import drawr from "./drawr.yml";
import _finally from "./finally.yml";
import gridln from "./gridln.yml";
import nasmc from "./nasmc.yml";
import paper_rs from "./paper.rs.yml";
import redditlang from "./redditlang.yml";
import rubert from "./rubert.yml";
import rustutil from "./rustutil.yml";
import small32 from "./small32.yml";
import typet from "./typet.yml";

export default {
	"bagel": bagel as Project,
	"drawr": drawr as Project,
	"finally": _finally as Project,
	"gridln": gridln as Project,
	"nasmc": nasmc as Project,
	"paper.rs": paper_rs as Project,
	"redditlang": redditlang as Project,
	"rubert": rubert as Project,
	"rustutil": rustutil as Project,
	"small32": small32 as Project,
	"typet": typet as Project
} as Record<string, Project>;
