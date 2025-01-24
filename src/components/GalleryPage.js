import { useEffect } from "react";
import "./GalleryPage.css";
import v1 from "../videos/v1.mp4";
import v2 from "../videos/v2.mp4";
import v3 from "../videos/v3.mp4";
import v4 from "../videos/v4.mp4";
import v5 from "../videos/v5.mp4";
import v6 from "../videos/v6.mp4";
import v7 from "../videos/v7.mp4";
import v8 from "../videos/v8.mp4";
import v9 from "../videos/v9.mp4";
function GalleryPage() {
  const loadInstagramEmbedScript = () => {
    // Check if the script is already present on the page
    if (
      !document.querySelector(
        'script[src="https://www.instagram.com/embed.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        // Process Instagram embeds after the script is loaded
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      };
    } else {
      // If the script is already loaded, manually process the embeds
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    }
  };
  useEffect(() => {
    // Call the function to ensure the Instagram embeds are loaded
    loadInstagramEmbedScript();
  }, []);

  const Videos = [v1, v2, v3, v4, v5, v6, v7, v8, v9];
  return (
    <section className="insta-reel">
      <h2>These are our recent works</h2>
      {Videos.map((val, index) => (
        <div key={index}>
          <video id={`video-${index}`} className="video-container" controls muted autoPlay>
            <source src={val} type="video/mp4" />
          </video>
        </div>
      ))}

      {/* 
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DDkFe4vyvWv/"
      >
      </blockquote>
      <script async src="//www.instagram.com/embed.js"></script>  */}
    </section>
  );
}

export default GalleryPage;
// export default InstagramEmbed;
