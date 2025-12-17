import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Vaccine } from "@/data/vaccineData";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./InteractiveSyringeCard.module.css";

interface InteractiveSyringeCardProps {
  vaccine: Vaccine;
  index?: number;
}

const InteractiveSyringeCard = ({ vaccine, index = 0 }: InteractiveSyringeCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const liquidDropRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const syringeLiquidRef = useRef<HTMLDivElement>(null);
  const syringePlungerRef = useRef<HTMLDivElement>(null);
  const syringeContainerRef = useRef<HTMLDivElement>(null);

  // Map vaccine data to component format
  const shortDescription = vaccine.protectsAgainst;
  // Create motivational trust-building message with safety and benefit emphasis
  const trustMessage = vaccine.friendlyInfo 
    ? `${vaccine.protectsAgainst}. ${vaccine.friendlyInfo}`
    : vaccine.importance
    ? `${vaccine.protectsAgainst}. ${vaccine.importance}. Safe and tested.`
    : `${vaccine.protectsAgainst}. Safe, effective protection for your family.`;
  const fullDetails = {
    protectsAgainst: vaccine.protectsAgainst,
    howGiven: vaccine.route && vaccine.site 
      ? `${vaccine.route} – ${vaccine.site}`
      : vaccine.route || vaccine.site || "Not specified",
    longTermBenefit: vaccine.longTermBenefit || "Not specified",
    commonSideEffects: vaccine.commonSideEffects || "Not specified",
    whenSeeDoctor: vaccine.whenToSeeDoctor || "Not specified",
    ifNotTaken: vaccine.riskIfNotTaken || "Not specified",
  };

  const handleSyringeClick = () => {
    if (isPopupOpen || isAnimating) return;
    
    setIsAnimating(true);
    
    // Step 1: Animate plunger and liquid
    if (syringeLiquidRef.current && syringePlungerRef.current) {
      syringeLiquidRef.current.classList.add(styles.active);
      syringePlungerRef.current.classList.add(styles.active);
    }

    // Step 2: Create liquid drop at needle tip
    setTimeout(() => {
      if (liquidDropRef.current && syringeContainerRef.current) {
        const containerRect = syringeContainerRef.current.getBoundingClientRect();
        const needleTipX = containerRect.left + containerRect.width;
        const needleTipY = containerRect.top + containerRect.height / 2;
        
        liquidDropRef.current.style.left = `${needleTipX}px`;
        liquidDropRef.current.style.top = `${needleTipY}px`;
        liquidDropRef.current.style.position = "fixed";
        liquidDropRef.current.style.transform = "translate(-50%, -50%)";
        liquidDropRef.current.classList.add(styles.active);
      }
    }, 600);

    // Step 3: Morph drop into popup at center
    setTimeout(() => {
      if (liquidDropRef.current && syringeContainerRef.current && popupRef.current) {
        // Hide liquid drop
        if (liquidDropRef.current) {
          liquidDropRef.current.style.display = "none";
        }
        
        // Position popup at center of screen - CSS will handle the centering
        popupRef.current.style.left = "50%";
        popupRef.current.style.top = "50%";
            popupRef.current.style.zIndex = "999999";
        
        // Trigger popup expansion
        requestAnimationFrame(() => {
          if (popupRef.current) {
            setIsPopupOpen(true);
            setIsAnimating(false);
          }
        });
      }
    }, 1000);
  };

  const closePopup = () => {
    if (!isPopupOpen) return;
    
    setIsPopupOpen(false);
    
    // Reset syringe after popup closes
    setTimeout(() => {
      resetSyringe();
    }, 300);
  };

  const resetSyringe = () => {
    if (syringeLiquidRef.current && syringePlungerRef.current) {
      syringeLiquidRef.current.classList.remove(styles.active);
      syringePlungerRef.current.classList.remove(styles.active);
    }
    
    if (liquidDropRef.current) {
      liquidDropRef.current.classList.remove(styles.active);
      liquidDropRef.current.style.display = "";
      liquidDropRef.current.style.left = "";
      liquidDropRef.current.style.top = "";
      liquidDropRef.current.style.transform = "";
      liquidDropRef.current.style.position = "";
    }
    
    if (popupRef.current) {
      popupRef.current.style.left = "";
      popupRef.current.style.top = "";
      popupRef.current.style.zIndex = "";
    }
  };

  // Close popup on Escape key
  useEffect(() => {
    if (!isPopupOpen) return;
    
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isPopupOpen]);

  // Close popup when clicking outside
  useEffect(() => {
    if (!isPopupOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        closePopup();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPopupOpen]);

  return (
    <div 
      className="bg-card rounded-2xl p-5 border border-border/50 card-hover animate-fade-in relative overflow-visible"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-col gap-4 items-start">
        {/* Syringe Container - Full Width */}
        <div 
          ref={syringeContainerRef}
          className={styles.syringeContainer}
          onClick={handleSyringeClick}
          role="button"
          tabIndex={0}
          aria-label={`Click to learn more about ${vaccine.name} vaccine`}
          onKeyDown={(e) => {
            if ((e.key === " " || e.key === "Enter") && !isPopupOpen && !isAnimating) {
              e.preventDefault();
              handleSyringeClick();
            }
          }}
        >
        {/* Syringe Barrel */}
        <div className={styles.syringeBarrel}>
          {/* Liquid inside barrel */}
          <div ref={syringeLiquidRef} className={styles.syringeLiquid}>
            <div className={styles.liquidVaccineName}>{vaccine.name}</div>
            <div className={styles.liquidDescription}>{trustMessage}</div>
          </div>
          {/* Plunger */}
          <div ref={syringePlungerRef} className={styles.syringePlunger}>
            <div className={styles.plungerHandle}></div>
          </div>
        </div>
        {/* Needle */}
        <div className={styles.syringeNeedle}>
          <div className={styles.needleTip}></div>
        </div>
        {/* Liquid drop */}
        <div ref={liquidDropRef} className={styles.liquidDrop}></div>
        </div>

        {/* Find Vaccination Center Link - Below Syringe */}
        <div className="text-left w-full">
          <Link
            to="/hospitals"
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <MapPin className="w-3.5 h-3.5" />
            Find a vaccination center
          </Link>
        </div>
      </div>

      {/* Popup Bubble (Detailed Info) - Rendered via Portal */}
      {typeof document !== 'undefined' && createPortal(
        <>
          <div 
            className={`${styles.popupBackdrop} ${isPopupOpen ? styles.backdropActive : ""}`}
            onClick={closePopup}
            aria-hidden="true"
          />
          <div 
            ref={popupRef}
            className={`${styles.popupBubble} ${isPopupOpen ? styles.active : ""}`}
          >
            <button 
              className={styles.closeButton}
              onClick={closePopup}
              aria-label="Close"
            >
              ✕
            </button>
            <div className={styles.popupContent}>
              <h2 className={styles.popupTitle}>{vaccine.name}</h2>
              
              <div className={styles.infoSection}>
                <h3>Protects against</h3>
                <p>{fullDetails.protectsAgainst}</p>
              </div>

              <div className={styles.infoSection}>
                <h3>How is it given?</h3>
                <p>{fullDetails.howGiven}</p>
              </div>

              <div className={styles.infoSection}>
                <h3>Long-term benefit</h3>
                <p>{fullDetails.longTermBenefit}</p>
              </div>

              <div className={styles.infoSection}>
                <h3>Common, mild side effects</h3>
                <p>{fullDetails.commonSideEffects}</p>
              </div>

              <div className={styles.infoSection}>
                <h3>When should you see a doctor?</h3>
                <p>{fullDetails.whenSeeDoctor}</p>
              </div>

              <div className={styles.infoSection}>
                <h3>If the vaccine is not taken</h3>
                <p>{fullDetails.ifNotTaken}</p>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}
    </div>
  );
};

export default InteractiveSyringeCard;

