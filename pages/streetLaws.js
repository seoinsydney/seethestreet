import styles from '@/styles/page.module.scss'
import Grid from '@mui/material/Grid';
import FastMotionLayout from '../components/fastMotionLayout';
import WebPageLayout from '../components/webPageLayout';

export default function MyStreetManual() {
  return (
    <WebPageLayout>
    <div className={styles.article}>
        <FastMotionLayout delaySpeed={0.5}>
            <h1>Street photography laws</h1>
            <Grid container>
                <Grid item xs={12} md={6} lg={6}>
                    <img src="./street manual.png" alt="Boris pocatko" />
                </Grid>
            </Grid>
            <hr />
            <section>
                <h3>taking photographs in a public place</h3>
                <p>In Australia most forms of "unauthorised" photography have in fact been authorised since the 1937 High Court decision in Victoria Park Racing v. Taylor (1937) 58 CLR 479 (at p.496). This was reaffirmed recently in ABC v Lenah (2001) HCA 63, where the Court ruled that despite the passage of decades since Victoria Park, any concept of a Tort of invasion of privacy still does not exist in Australia.
                As Justice Dowd put it with ruthless clarity in R v Sotheren (2001) NSWSC 204: A person, in our society, does not have a right not to be photographed.</p>
                <h3>photographing people</h3>
                <p>There are no publicity or personality rights in Australia, and there is no right to privacy that protects a person’s image.</p>
                <h3>photography from a public place onto private property</h3>
                <p>There is no restriction on taking photographs of people on private property from public property. According to Victoria Park Racing and Recreation Grounds Co Ltd v Taylor (1937) there is no freedom from view, so people who are photographed on their property from a public location have no legal claim against you if what is captured in the photograph can be seen from the street.</p>
                <h3>assaulting photographers</h3>
                <p>Although property owners may use reasonable force to evict people, they can never threaten violence (assault), detain you at length (false imprisonment), push you around and seize your camera or film (battery), or even force you to delete digital files (coercion). Rent-a-cops, supermarket clerks, shopping centre managers and even customers at a Haldon Street Cafe in Lakemba should take careful note (see the "Hasselblad" tab in the Sydney Unposed project).
                In the last few years there have been a spate of attacks on photographers, and in every case the assailants were charged with criminal offences:</p>
                <ul>
                    <li>Feb 2006: Former politician Mark Latham was charged with assault, malicious damage and stealing after a press photographer snapped him and his children leaving a fast food restaurant.</li>
                    <li>Dec 2005: A twenty-year-old was arrested and charged with malicious damage for assaulting St George and Sutherland Shire Leader photographer on Cronulla beach (in the lead-up to the pre-Christmas race riots).</li>
                    <li>Nov 2005: Five men were charged with affray and assault after attacking a Channel Seven TV crew, who filmed them leaving a Melbourne terrorist suspects hearing.</li>
                </ul>
                <h3>references</h3>
                <h6><a href="https://www.artslaw.com.au/info-sheets/info-sheet/street-photographers-rights/">Street photographer’s rights</a></h6>
                <h6><a href="http://www.4020.net/words/photorights.php">NSW Photo Rights</a></h6>
            </section>
        </FastMotionLayout>
    </div>
    </WebPageLayout>
  )
}