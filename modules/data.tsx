import { PraticienType } from "./types"

export const dataMembres = [
    {
        name: "Erik HENRION",
        photo: "membres/erik.png",
        poste: "Gérant - Fondateur",
        desc: "Passionné de technologies et de formations, ma conviction est que la technologie doit être au service de l'humain et non l'inverse. Après 25 années dans l'aéronautique, j'ai su revenir à ce qui me faisait vibrer !",
        facebook: "https://www.facebook.com/ErikHenrion",
        instagram: "https://www.instagram.com/erikhenrion",
        linkedin: "https://www.linkedin.com/in/henrionerik/"
    },
    {
        name: "Tom HENRION",
        photo: "membres/tom.png",
        poste: "Manager",
        desc: "Ingénieur Informatique de formation, je suis heureux de pouvoir mettre mes compétences de management au service de PerfectCenter. Ayant fait de nombreux sport collectif, je suis persuadé que l'esprit d'équipe était la clé de la réussite.",
        facebook: "https://www.facebook.com/henrion.tom",
        instagram: "https://www.instagram.com/tomhenrion/?hl=fr",
        linkedin: "https://www.linkedin.com/in/tom-henrion-5b7364178/"
    },
    {
        name: "Téo HENRION",
        photo: "membres/teo.png",
        poste: "Manager",
        desc: "Sportif de haut niveau en handball depuis plusieurs années, j'ai toujours été convaincu que le travail d'équipe était la solution pour réaliser de beaux projets, avec des valeurs communes. Je suis fier d'apporter mon énergie ainsi que mes compétences d'ingénieur conception et innovation de produit au sein de l'équipe Perfect !",
        facebook: "https://www.facebook.com/henrion.teo",
        instagram: "https://www.instagram.com/teo_hrn",
        linkedin: "https://www.linkedin.com/in/t%C3%A9o-henrion-39a9801a4"
    },
    {
        name: "Laurent BROSSEAU",
        photo: "membres/Laurent_BROSSEAU.png",
        poste: "Conseiller",
        desc: "Préparateur physique et mental, entraineur d'aviron. 20 ans d'expérience dans le management sportif, avec une flamme dynamique pour transmettre de l'énergie vers l'exploration de nos limites individuelles, et dans la synergie d'équipe. Je garde la vocation et le rêve de forger le mental au travers d'expériences sportives. le feeling pour adapter le haut niveau vers un sport santé qui a du sens pour chacun, à un moment donné de sa vie.",
        facebook: "https://www.facebook.com/laurent.ipp",
        instagram: "https://www.instagram.com/laurent_bross_blc/",
        linkedin: "https://www.linkedin.com/in/laurent-brosseau-a0004b52/"
    }
]

export const dataProducts = [
    {
        name: "PSIO",
        title: "Accélérateur de bien-être",
        desc: (
            <>
                Les lunettes de lumino-relaxation PSIO garantissent des effets durables sur des problèmes tels que le stress, la fatigue, le dysfonctionnement corporel, la dépression, la gestion des émotions..
                <br />C’est une solution innovante, simple et efficace à toute personne désireuse d’améliorer sa qualité de vie et retrouver son bien-être. 
            </>
        ),
        link: "/perfectcare/psio",
        moreAboutLink: "https://www.psio.com/fr/catalogue/psio-2.html"
    },
    {
        name: "MINT-E",
        title: "Utilisez la force de la nature",
        desc: (
            <>
                Mint-e propose une gamme de produits appréciée pour son
                efficacité. Elle est conseillée par de nombreux médecins, thérapeutes
                et centre hospitaliers.
                <br /> Mint-e associe la phytothérapie, les Fleurs de Bach et
                des dilutions homéo-compatibles pour une action globale sur la
                santé et le bien-être.
            </>
        ),
        link: "/perfectcare/mint-e",
        moreAboutLink: "https://mint-elabs.fr/products/z-trauma"
    },
    {
        name: "KAQUN",
        title: "Water and more",
        desc: (
            <>
                L'eau Kaqun n'est pas n'importe quelle eau. Elle contient 20 fois plus d'oxygen qu'une eau classique.
                L'oxygène est indéniablement l'un des éléments les plus importants pour chaque 
                cellule de notre corps. En biologie cellulaire, Otto Heinrich Warburg, a découvert 
                qu'aucune maladie ne peut survivre en présence de niveaux élevés d'oxygène.
            </>
        ),
        link: "/perfectcare/kaqun",
        moreAboutLink: "https://mint-elabs.fr/products/z-trauma"
    }
]
export const dataPsio = [
    {
        name: "Psio classic",
        title: "Psio classic",
        desc: (
            <>
                Le Psio Classic est l'entré en gamme des lunettes Psio. Vous pouvez acheter ce Psio et bénéficier d'un abonnement à notre newletter ! Je dis un peu n'importe quoi pour pouvoir avoir du texte
            </>
        ),
        link: "/perfectcare/kaqun",
        moreAboutLink: "https://www.psio.com/fr/catalogue/psio-2.html"
    },
    {
        name: "Psio Custom",
        title: "Psio Custom",
        desc: (
            <>
                Le Psio Classic est l'entré en gamme des lunettes Psio. Vous pouvez acheter ce Psio et bénéficier d'un abonnement à notre newletter ! Je dis un peu n'importe quoi pour pouvoir avoir du texte
            </>
        ),
        link: "/perfectcare/kaqun",
        moreAboutLink: "https://www.psio.com/fr/catalogue/psio-2.html"
    },
    {
        name: "Psio Prenium",
        title: "Psio Prenium",
        desc: (
            <>
                Le Psio Classic est l'entré en gamme des lunettes Psio. Vous pouvez acheter ce Psio et bénéficier d'un abonnement à notre newletter ! Je dis un peu n'importe quoi pour pouvoir avoir du texte
            </>
        ),
        link: "/perfectcare/kaqun",
        moreAboutLink: "https://www.psio.com/fr/catalogue/psio-2.html"
    },
]

export const dataCoachs : PraticienType[] = [
    {
        name: "Véronique ROUBERTIE",
        photo: "/coach/veronique_ROUBERTIE.png",
        practice1: "Sens-thérapeute - Accompagnement des dépendants affectifs",
        description: `« Si tu restes dans ta tête tu prends perpette » Tony ROBBINS.
        C’est ce que nous faisons tous, quand on est dépendant affectif c’est encore plus dur car toute rencontre est un enjeu existentiel celui d’être aimé. On entre en relation pour de mauvaises raisons.
        Je t’accompagne sur le chemin de l’autonomie affective. Car j’ai su le mal de vivre de la dépendance affective, toute notre énergie y passe, la douleur est paralysante, la vie un enfer.
        Aujourd’hui, J’aime la phrase du Dr LEJOYEUX « il n’est pas de meilleur maitre en liberté qu’un dépendant guéri » qui me caractérise le mieux.
        Grace à des pratiques ludiques, psychocorporelles, tu vas habiter ton corps, comprendre tes besoins, poser tes limites et surtout tu seras en mesure de te nourrir affectivement.
        Cette démarche qui a déjà fait ses preuves va te permettre de quitter le monde de l’addiction relationnelle, les hauts et bas de l’alternance fusion-démission, je t’aime - je ne t’aime pas…`
    },
    {
        name: "Nadia CHABANE",
        photo: "/coach/Nadia_CHABANE.png",
        practice1: "Coach thérapeutique",
        description: `"Dis-moi Où Tu As Mal, Je Te Dirai Qui Tu Es."
        J'ai libéré ma vocation d'aide aux autres, en suivant une formation de sophrologue.
        Puis, souhaitant aussi appréhender le corps physique, j'ai décidé de me former aux modelages du monde pour soulager les tensions, les douleurs. Après plusieurs formations en techniques énergétiques, j'ai compris que pour apporter de l'aide à mes patients, il fallait apporter des soins holistiques en alliant le physique, le mental et la sphère émotionnelle.
        Oscillant entre le France et le Maroc, je vous propose des soins sur mesure, utilisant l'écoute active, le dialogue bienveillant, le changement de visions, les soins énergétiques, les modelages du monde...
        En apaisant le mental et en régulant l'émotionnel, le corps lâche prise et la voix de la libération surgit.
        Mon objectif est de faire comprendre à chacun, que les solutions remèdes se trouvent en soi, et qu'il faut trouver les clés pour ouvrir la porte du bien-être et du bonheur.
        Ensemble, nous décoderons les souffrances, pour les déprogrammer et retrouver votre être originel. En travaillant sur l'alignement et le rééquilibrage énergétique.
        Je vous conduirai sur le chemin du moment présent, car c'est bien là que nous devons tous être.`
    },
    {
        name: "Ashuma ASH",
        photo: "/coach/Ashuma_ASH.png",
        practice1: "Sophrologue - Relaxologue",
        description: `"Dis-moi Où Tu As Mal, Je Te Dirai Qui Tu Es."
        J'ai libéré ma vocation d'aide aux autres, en suivant une formation de sophrologue.
        Puis, souhaitant aussi appréhender le corps physique, j'ai décidé de me former aux modelages du monde pour soulager les tensions, les douleurs. Après plusieurs formations en techniques énergétiques, j'ai compris que pour apporter de l'aide à mes patients, il fallait apporter des soins holistiques en alliant le physique, le mental et la sphère émotionnelle.
        Oscillant entre le France et le Maroc, je vous propose des soins sur mesure, utilisant l'écoute active, le dialogue bienveillant, le changement de visions, les soins énergétiques, les modelages du monde...
        En apaisant le mental et en régulant l'émotionnel, le corps lâche prise et la voix de la libération surgit.
        Mon objectif est de faire comprendre à chacun, que les solutions remèdes se trouvent en soi, et qu'il faut trouver les clés pour ouvrir la porte du bien-être et du bonheur.
        Ensemble, nous décoderons les souffrances, pour les déprogrammer et retrouver votre être originel. En travaillant sur l'alignement et le rééquilibrage énergétique.
        Je vous conduirai sur le chemin du moment présent, car c'est bien là que nous devons tous être.`
    },
    {
        name: "Malika ARNAUD",
        photo: "/coach/Malika_ARNAUD.png",
        practice1: "Coach en accompagnement à la réussite - Thérapeute Bien-être",
        description: `"Dis-moi Où Tu As Mal, Je Te Dirai Qui Tu Es."
        J'ai libéré ma vocation d'aide aux autres, en suivant une formation de sophrologue.
        Puis, souhaitant aussi appréhender le corps physique, j'ai décidé de me former aux modelages du monde pour soulager les tensions, les douleurs. Après plusieurs formations en techniques énergétiques, j'ai compris que pour apporter de l'aide à mes patients, il fallait apporter des soins holistiques en alliant le physique, le mental et la sphère émotionnelle.
        Oscillant entre le France et le Maroc, je vous propose des soins sur mesure, utilisant l'écoute active, le dialogue bienveillant, le changement de visions, les soins énergétiques, les modelages du monde...
        En apaisant le mental et en régulant l'émotionnel, le corps lâche prise et la voix de la libération surgit.
        Mon objectif est de faire comprendre à chacun, que les solutions remèdes se trouvent en soi, et qu'il faut trouver les clés pour ouvrir la porte du bien-être et du bonheur.
        Ensemble, nous décoderons les souffrances, pour les déprogrammer et retrouver votre être originel. En travaillant sur l'alignement et le rééquilibrage énergétique.
        Je vous conduirai sur le chemin du moment présent, car c'est bien là que nous devons tous être.`
    }
]

export const dataArticles = [
    {
        name: "Luminothérapie",
        photo: "article/luminotherapie.png",
        description:
            "Il est important de rappeler que la luminothérapie n’est pas une lubie récente mais qu’elle remonte à l’antiquité, bien que cette pratique ait vraiment été légitimé aux alentours du XXème siècle. Voici donc un article qui va vous éclairer.."
    }
]
