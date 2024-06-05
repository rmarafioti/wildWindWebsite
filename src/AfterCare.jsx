import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { SlClose } from "react-icons/sl";

export default function Aftercare() {
  const [popUp, setPopUp] = useState(false);
  const [popUpContent, setPopUpContent] = useState(null);

  const Popup = ({ isOpen, close, children }) => {
    if (!isOpen) return null;

    return (
      <div className="popUpOverlay" onClick={close}>
        <div className="popUpContent" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };

  const openPopUp = (content) => {
    setPopUpContent(content);
    setPopUp(true);
  };

  const closePopUp = () => {
    setPopUp(false);
    setPopUpContent(null);
  };

  const dryLockInstructions = (
    <>
      <div className="buttonSection">
        <button>
          <SlClose onClick={closePopUp} />
        </button>
      </div>
      <h3 className="popHeader">Bandage removal</h3>
      <p className="popInstructions">
        Leave the bandage on for as little as two hours or overnight to 24
        hours. Do not reapply the bandage. Wash the area gently with water and a
        mild, fragrance-free soap such as Liquid Dial, Dove, or Ivory. Do this
        using CLEAN HANDS to remove all excess ointment, blood, and ink. Pat dry
        with a clean paper towel. DO NOT SCRUB.
      </p>
      <h3 className="popHeader">Routine care</h3>
      <p className="popInstructions">
        Wash your tattoo 2-3 times daily for the first few days. After washing,
        allow the skin to dry and apply a VERY THIN layer of Aquaphor for 2 to 3
        days. Always wash your tattoo with fragrance-free soap before you apply
        or reapply the Aquaphor. You may experience clogged pores during
        healing; this is normal and will not affect your tattoo. On the 3rd or
        4th day, switch to a mild, fragrance-free moisturizing lotion such as
        Curel, Lubriderm, or Aveeno until the tattoo settles into the skin. This
        typically takes three weeks to one month. It is normal for your tattoo
        to look hazy during this time. Expect to see your tattoo peel and flake.
        It is completely normal for your tattoo to itch, but it is imperative
        NOT TO SCRATCH OR PICK YOUR TATTOO. NO DIRECT AND PROLONGED EXPOSURE TO
        SUN for two weeks. After that, apply sunblock to your tattoo when
        exposed. NO SWIMMING OR SOAKING for two weeks.
      </p>
      <p className="popInstructionsTag">
        If you experience any unusual pain, redness, swelling, or suspect
        infection, please contact us and your physician immediately. DO NOT TAKE
        ANYONE ELSE’S ADVICE. PLEASE CONTACT YOUR ARTIST DIRECTLY WITH ANY
        QUESTIONS.
      </p>{" "}
    </>
  );

  const tegadermInstructions = (
    <section>
      <div className="buttonSection">
        <button>
          <SlClose onClick={closePopUp} />
        </button>
      </div>
      <h3 className="popHeader">Bandage application</h3>
      <p className="popInstructions">
        TEGADERM should be applied within one hour of completing the new tattoo.
        Moisture from the open skin prevents the adhesive from sticking to the
        new tattoo. Apply TEGADERM to CLEAN DRY SKIN with no residue from the
        tattoo process. TEGADERM should cover the tattoo with one inch all
        around for good adhesion. Glycerin in green soap residue will react with
        the adhesive and should be rinsed well before TEGADERM is applied.
        TEGADERM should stay in place for THREE DAYS while the skin is open and
        producing fluid. After 24 HOURS, the bandage can be removed and
        replaced. The second application can stay in place for TWO DAYS if it
        sticks well to the skin with minimal fluid build-up. If the tattoo is
        smaller and simpler in design and there is no fluid build-up up then the
        initial application can stay in place for the full THREE DAYS. IF
        REDNESS OCCURS, REMOVE THE TEGADERM, DISCONTINUE USE AND FOLLOW THE
        ALTERNATIVE AFTERCARE INSTRUCTIONS ABOVE. If you are allergic to
        adhesives, test a small piece on your skin. Redness will clear once the
        TEGADERM is removed, and the tattoo will not be affected.
      </p>
      <h3 className="popHeader">Bandage removal</h3>
      <p className="popInstructions">
        TO REMOVE TEGADERM: peel it back over itself, not away from the body.
        Avoid stretching the skin. Once TEGADERM is removed, clean and dry the
        area and proceed with your preferred topical aftercare NO DIRECT AND
        PROLONGED EXPOSURE TO SUN for two weeks. After that, apply sunblock to
        your tattoo when exposed. NO SWIMMING OR SOAKING for two weeks.
      </p>
      <p className="popInstructionsTag">
        If you experience any unusual pain, redness, or swelling and suspect
        infection, please contact us and your physician immediately. DO NOT TAKE
        ANYONE ELSE’S ADVICE. PLEASE CONTACT YOUR ARTIST DIRECTLY WITH ANY
        QUESTIONS.
      </p>
    </section>
  );

  return (
    <article id="afterCare">
      <h1 id="afterHeader">Aftercare</h1>

      <h3 id="afterTagline">
        everything you need to know about taking care of your tattoo.
      </h3>
      <div className="careContainer">
        <h2 className="instructions">DRYLOCK BANDAGE INSTRUCTIONS </h2>
        <button onClick={() => openPopUp(dryLockInstructions)}>
          <IoAddCircleOutline />
        </button>
      </div>
      <div className="careContainerBottom">
        <h2 className="instructions">TEGADERM BANDAGE INSTRUCTIONS </h2>
        <button onClick={() => openPopUp(tegadermInstructions)}>
          <IoAddCircleOutline />
        </button>
      </div>

      <Popup isOpen={popUp} close={closePopUp}>
        {popUpContent}
      </Popup>
    </article>
  );
}
