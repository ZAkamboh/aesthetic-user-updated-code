import React from "react"
//import { makeStyles } from '@material-ui/core/styles';
import { Slide } from 'react-slideshow-image';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import med1 from "../../Assets/Images/newmed5.jpg"
import med2 from "../../Assets/Images/newmed2.jpg"
import med3 from "../../Assets/Images/newmed4.jpg"


var screenHeight = window.screen.availHeight;
var screenWidth = window.screen.availWidth

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}


class Home extends React.Component {

  render() {
    return (
      <div >

        <div>
          <Grid style={{ height: screenHeight, width: "100%", marginTop: "5%" }} container >
            <Grid item xs={12}>
              <Paper style={{ height: screenHeight / 1.5}} >
                <Slide {...properties}>
                  <div >
                    <div>
                      <img src={med1} alt="Title" style={{ height: screenHeight / 1.4, width: "100%" }} />

                    </div>
                  </div>
                  <div >
                    <div>
                      <img src={med2} alt="Title" style={{ height: screenHeight / 1.4, width: "100%" }} />

                    </div>
                  </div>
                  <div>
                    <div>
                      <img src={med3} alt="Title" style={{ height: screenHeight / 1.4, width: "100%" }} />
                    </div>
                  </div>
                </Slide>
              </Paper>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "6%", height: screenHeight }}>
              <Paper style={{ height: screenHeight}} >

                <div style={{ height: "10%", fontFamily: "verdana" }}>
                  <h1 style={{ textAlign: "center", }}>Our Medical News</h1>
                </div>
                <div style={{ fontFamily: "verdana", height: screenHeight }}>
                  <h2 > Stem Cell Therapy Safety</h2>
                  <p>Most stem cell therapy using adult stem cells is considered safe because the stem cells are
    collected from the patient, minimizing the risk of an unwanted reaction. The most common
    side effects are temporary swelling and pain.
<br />
                    <br />
                    While most stem cell therapy for arthritis is considered safe, it does carry the same risks as
any other medical procedure, such as a small risk of infection. Risk may be increased if:</p>

                  <h2>Does stem cell injections work for knees?</h2>
                  <p>An autologous stem cell knee injection is a non-invasive knee treatment used to treat chronic pain in patients suffering from ligament injuries, tendon injuries, fractures and degenerative joint disorders, such as osteoarthritis.</p>
                  <h2>How can stem cells help?</h2>
                  <p>Researchers and doctors hope stem cell studies can help to: Increase understanding of how diseases occur. By watching stem cells mature into cells in bones, heart muscle, nerves, and other organs and tissue, researchers and doctors may better understand how diseases and conditions develop.</p>
                  <h2>Regenerative treatment models</h2>
                  <p>Stem cells are thought to mediate repair via five primary mechanisms: 1) providing an anti-inflammatory effect, 2) homing to damaged tissues and recruiting other cells, such as endothelial progenitor cells, that are necessary for tissue growth, 3) supporting tissue remodeling over scar formation, 4) inhibiting apoptosis, and 5) differentiating into bone, cartilage, tendon, and ligament tissue.[55][56]
    
    To further enrich blood supply to the damaged areas, and consequently promote tissue regeneration, platelet-rich plasma could be used in conjunction with stem cell transplantation.[57][58] The efficacy of some stem cell populations may also be affected by the method of delivery; for instance, to regenerate bone, stem cells are often introduced in a scaffold where they produce the minerals necessary for generation of functional bone.[57][58][59][60]
    
Stem cells have also been shown to have a low immunogenicity due to the relatively low number of MHC molecules found on their surface. In addition, they have been found to secrete chemokines that alter the immune response and promote tolerance of the new tissue. This allows for allogeneic treatments to be performed without a high rejection risk.[61]</p>               
                </div>
              </Paper>
          
            </Grid>
       

            <Grid item xs={12} style={{height: screenHeight }}>
              <Paper style={{ height: screenHeight}} >
                <div style={{ fontFamily: "verdana", height: screenHeight }}>
                  <h2>Sources for stem cells</h2>
                  <p>Most stem cells intended for regenerative therapy are generally isolated either from the patient’s bone marrow or from adipose tissue.[58][60] Mesenchymal stem cells can differentiate into the cells that make up bone, cartilage, tendons, and ligaments, as well as muscle, neural and other progenitor tissues, they have been the main type of stem cells studied in the treatment of diseases affecting these tissues.[64][65] The number of stem cells transplanted into damaged tissue may alter efficacy of treatment. Accordingly, stem cells derived from bone marrow aspirates, for instance, are cultured in specialized laboratories for expansion to millions of cells.[58][60] Although adipose-derived tissue also requires processing prior to use, the culturing methodology for adipose-derived stem cells is not as extensive as that for bone marrow-derived cells.[66][67] While it is thought that bone-marrow derived stem cells are preferred for bone, cartilage, ligament, and tendon repair, others believe that the less challenging collection techniques and the multi-cellular microenvironment already present in adipose-derived stem cell fractions make the latter the preferred source for autologous transplantation.[57]
   
   New sources of mesenchymal stem cells are being researched, including stem cells present in the skin and dermis which are of interest because of the ease at which they can be harvested with minimal risk to the animal.[68] Hematopoetic stem cells have also been discovered to be travelling in the blood stream and possess equal differentiating ability as other mesenchymal stem cells, again with a very non-invasive harvesting technique.[69]
   
There has been more recent interest in the use of extra embryonic mesenchymal stem cells. Research is underway to examine the differentiating capabilities of stem cells found in the umbilical cord, yolk sac and placenta of different animals. These stem cells are thought to have more differentiating ability than their adult counterparts, including the ability to more readily form tissues of endodermal and ectodermal origin.[61]</p>
                  <h2>Ligament and tendon repair</h2>
                  <p>Autologous stem cell-based treatments for ligament injury, tendon injury, osteoarthritis, osteochondrosis, and sub-chondral bone cysts have been commercially available to practicing veterinarians to treat horses since 2003 in the United States and since 2006 in the United Kingdom. Autologous stem cell based treatments for tendon injury, ligament injury, and osteoarthritis in dogs have been available to veterinarians in the United States since 2005. Over 3000 privately owned horses and dogs have been treated with autologous adipose-derived stem cells. The efficacy of these treatments has been shown in double-blind clinical trials for dogs with osteoarthritis of the hip and elbow and horses with tendon damage.[87][88]
   
   Race horses are especially prone to injuries of the tendon and ligaments. Conventional therapies are very unsuccessful in returning the horse to full functioning potential. Natural healing, guided by the conventional treatments, leads to the formation of fibrous scar tissue that reduces flexibility and full joint movement. Traditional treatments prevented a large number of horses from returning to full activity and also have a high incidence of re-injury due to the stiff nature of the scarred tendon. Introduction of both bone marrow and adipose derived stem cells, along with natural mechanical stimulus promoted the regeneration of tendon tissue. The natural movement promoted the alignment of the new fibers and tendocytes with the natural alignment found in uninjured tendons. Stem cell treatment not only allowed more horses to return to full duty and also greatly reduced the re-injury rate over a three-year period.[61]
   
The use of embryonic stem cells has also been applied to tendon repair. The embryonic stem cells were shown to have a better survival rate in the tendon as well as better migrating capabilities to reach all areas of damaged tendon. The overall repair quality was also higher, with better tendon architecture and collagen formed. There was also no tumor formation seen during the three-month experimental period. Long-term studies need to be carried out to examine the long-term efficacy and risks associated with the use of embryonic stem cells.[61] Similar results have been found in small animals.[61]</p>
                  

                </div>
              </Paper>
          
            </Grid>

            <Grid item xs={12} style={{height: screenHeight }}>
              <Paper style={{ height: screenHeight}} >
                <div style={{ fontFamily: "verdana", height: screenHeight }}>
                  <h2>Joint repair</h2>
                  <p>Osteoarthritis is the main cause of joint pain both in animals and humans. Horses and dogs are most frequently affected by arthritis. Natural cartilage regeneration is very limited and no current drug therapies are curative, but rather look to reduce the symptoms associated with the degeneration. Different types of mesenchymal stem cells and other additives are still being researched to find the best type of cell and method for long-term treatment.[61]
     
Adipose-derived mesenchymal cells are currently the most often used because of the non-invasive harvesting. There has been a lot of success recently injecting mesenchymal stem cells directly into the joint. This is a recently developed, non-invasive technique developed for easier clinical use. Dogs receiving this treatment showed greater flexibility in their joints and less pain.[89]</p>
                  <h2>Muscle repairs</h2>
                  <p>Stem cells have successfully been used to ameliorate healing in the heart after myocardial infarction in dogs. Adipose and bone marrow derived stem cells were removed and induced to a cardiac cell fate before being injected into the heart. The heart was found to have improved contractility and a reduction in the damaged area four weeks after the stem cells were applied.[90]
     
A different trial is underway for a patch made of a porous substance onto which the stem cells are “seeded” in order to induce tissue regeneration in heart defects. Tissue was regenerated and the patch was well incorporated into the heart tissue. This is thought to be due, in part, to improved angiogenesis and reduction of inflammation. Although cardiomyocytes were produced from the mesenchymal stem cells, they did not appear to be contractile. Other treatments that induced a cardiac fate in the cells before transplanting had greater success at creating contractile heart tissue.[91]</p>
                  <h2>Nervous system repairs</h2>
                  <p>Spinal cord injuries are one of the most common traumas brought into veterinary hospitals.[84] Spinal injuries occur in two ways after the trauma: the primary mechanical damage, and in secondary processes, like inflammation and scar formation, in the days following the trauma. These cells involved in the secondary damage response secrete factors that promote scar formation and inhibit cellular regeneration. Mesenchymal stem cells that are induced to a neural cell fate are loaded onto a porous scaffold and are then implanted at the site of injury. The cells and scaffold secrete factors that counteract those secreted by scar forming cells and promote neural regeneration. Eight weeks later, dogs treated with stem cells showed immense improvement over those treated with conventional therapies. Dogs treated with stem cells were able to occasionally support their own weight, which has not been seen in dogs undergoing conventional therapies.[92][93][94]
    
    Treatments are also in clinical trials to repair and regenerate peripheral nerves. Peripheral nerves are more likely to be damaged, but the effects of the damage are not as widespread as seen in injuries to the spinal cord. Treatments are currently in clinical trials to repair severed nerves, with early success. Stem cells induced to a neural fate injected in to a severed nerve. Within four weeks, regeneration of previously damaged stem cells and completely formed nerve bundles were observed.[68]
    
Stem cells are also in clinical phases for treatment in ophthalmology. Hematopoietic stem cells have been used to treat corneal ulcers of different origin of several horses. These ulcers were resistant to conventional treatments available, but quickly responded positively to the stem cell treatment. Stem cells were also able to restore sight in one eye of a horse with retinal detachment, allowing the horse to return to daily activities.[69]</p>

                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} style={{height: screenHeight }}>
              <Paper style={{ height: screenHeight,backgroundColor:"red" }} >
                <div style={{ fontFamily: "verdana", height: screenHeight }}>
                 

                </div>
              </Paper>
            </Grid>



          </Grid>
         
        </div>


      </div>
    )

  }
}

export default Home