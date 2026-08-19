import {
    useEffect,
    useState,
  } from "react";
  
  
  const API_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:5050";
  
  
  function PartnerModal({
    isOpen,
    onClose,
  }) {
  
    const [formData, setFormData] =
      useState({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
  
  
    const [status, setStatus] =
      useState("idle");
  
  
    const [feedback, setFeedback] =
      useState("");
  
  
    /* =====================================
       ESCAPE KEY + BODY SCROLL
    ====================================== */
  
    useEffect(() => {
  
      if (!isOpen) return;
  
  
      const handleEscape = (event) => {
  
        if (event.key === "Escape") {
          onClose();
        }
  
      };
  
  
      document.addEventListener(
        "keydown",
        handleEscape
      );
  
  
      document.body.style.overflow =
        "hidden";
  
  
      return () => {
  
        document.removeEventListener(
          "keydown",
          handleEscape
        );
  
        document.body.style.overflow =
          "";
  
      };
  
    }, [isOpen, onClose]);
  
  
    if (!isOpen) {
      return null;
    }
  
  
    /* =====================================
       INPUT CHANGE
    ====================================== */
  
    const handleChange = (event) => {
  
      const {
        name,
        value,
      } = event.target;
  
  
      setFormData((previous) => ({
        ...previous,
        [name]: value,
      }));
  
    };
  
  
    /* =====================================
       SUBMIT FORM
    ====================================== */
  
    const handleSubmit = async (event) => {
  
      event.preventDefault();
  
  
      setStatus("sending");
  
      setFeedback("");
  
  
      try {
  
        const response = await fetch(
          `${API_URL}/api/contact`,
          {
            method: "POST",
  
            headers: {
              "Content-Type":
                "application/json",
            },
  
            body: JSON.stringify(
              formData
            ),
          }
        );
  
  
        const result =
          await response.json();
  
  
        if (!response.ok) {
  
          throw new Error(
            result.message ||
            "Unable to send message."
          );
  
        }
  
  
        setStatus("success");
  
  
        setFeedback(
          "Message transmitted successfully."
        );
  
  
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
  
  
      } catch (error) {
  
        setStatus("error");
  
  
        setFeedback(
          error.message ||
          "Something went wrong."
        );
  
      }
  
    };
  
  
    return (
      <div
        className="partner-modal-overlay"
  
        onMouseDown={(event) => {
  
          if (
            event.target ===
            event.currentTarget
          ) {
            onClose();
          }
  
        }}
      >
  
        <div
          className="partner-modal"
  
          role="dialog"
  
          aria-modal="true"
  
          aria-labelledby="partner-title"
        >
  
          {/* HEADER */}
  
          <div className="partner-modal-header">
  
            <div>
  
              <span className="partner-modal-code">
                VHA // PARTNERSHIP CHANNEL
              </span>
  
  
              <h2 id="partner-title">
                Let's build
                <span className="gradient-text">
                  {" "}
                  what's next.
                </span>
              </h2>
  
            </div>
  
  
            <button
              type="button"
  
              className="partner-modal-close"
  
              onClick={onClose}
  
              aria-label="Close contact form"
            >
              ×
            </button>
  
          </div>
  
  
          <p className="partner-modal-intro">
            Interested in supporting the next
            generation of technology education?
            Send us a message and connect with
            the VHA Robotics &amp; Computer
            Science program.
          </p>
  
  
          {/* FORM */}
  
          <form
            className="partner-form"
  
            onSubmit={handleSubmit}
          >
  
            <div className="partner-form-grid">
  
  
              {/* NAME */}
  
              <div className="partner-field">
  
                <label htmlFor="partner-name">
                  <span>01</span>
                  NAME
                </label>
  
  
                <input
                  id="partner-name"
  
                  type="text"
  
                  name="name"
  
                  value={formData.name}
  
                  onChange={handleChange}
  
                  placeholder="Your name"
  
                  maxLength="100"
  
                  required
                />
  
              </div>
  
  
              {/* PHONE */}
  
              <div className="partner-field">
  
                <label htmlFor="partner-phone">
                  <span>02</span>
                  PHONE
                </label>
  
  
                <input
                  id="partner-phone"
  
                  type="tel"
  
                  name="phone"
  
                  value={formData.phone}
  
                  onChange={handleChange}
  
                  placeholder="+1 000 000 0000"
  
                  maxLength="30"
  
                  required
                />
  
              </div>
  
  
              {/* EMAIL */}
  
              <div className="partner-field partner-field-full">
  
                <label htmlFor="partner-email">
                  <span>03</span>
                  EMAIL
                </label>
  
  
                <input
                  id="partner-email"
  
                  type="email"
  
                  name="email"
  
                  value={formData.email}
  
                  onChange={handleChange}
  
                  placeholder="name@example.com"
  
                  maxLength="150"
  
                  required
                />
  
              </div>
  
  
              {/* MESSAGE */}
  
              <div className="partner-field partner-field-full">
  
                <label htmlFor="partner-message">
                  <span>04</span>
                  MESSAGE
                </label>
  
  
                <textarea
                  id="partner-message"
  
                  name="message"
  
                  value={formData.message}
  
                  onChange={handleChange}
  
                  placeholder="Tell us how you would like to connect or support the program..."
  
                  rows="6"
  
                  maxLength="3000"
  
                  required
                />
  
              </div>
  
            </div>
  
  
            {/* STATUS */}
  
            {feedback && (
  
              <div
                className={
                  `partner-feedback ${status}`
                }
              >
  
                <span></span>
  
                {feedback}
  
              </div>
  
            )}
  
  
            {/* SUBMIT */}
  
            <div className="partner-form-bottom">
  
              <span className="partner-secure-note">
                ● DIRECT MESSAGE // VHA
              </span>
  
  
              <button
                type="submit"
  
                className="btn btn-primary partner-submit"
  
                disabled={
                  status === "sending"
                }
              >
  
                {status === "sending"
                  ? "Transmitting..."
                  : "Send Message →"}
  
              </button>
  
            </div>
  
          </form>
  
        </div>
  
      </div>
    );
  
  }
  
  export default PartnerModal;