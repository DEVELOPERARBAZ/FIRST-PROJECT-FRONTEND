import { useEffect } from 'react';
import './GalleryPage.css';
function GalleryPage() {

  const loadInstagramEmbedScript = () => {
    // Check if the script is already present on the page
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
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

  return (
    <section className='insta-reel'>
      
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DDkFe4vyvWv/"
      >
      </blockquote>


      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/CvwdwyYoMJ8/"
      >
      </blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/Cv60e0FowPC/"
      >
      </blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/CwSxxKNI_c3/"
      >
      </blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/Crvtbjgo_bC/"
      >
      </blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/CuW9MBIotn3/"
      >
      </blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/CrjEh31IxRV/"
      >
      </blockquote>

      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/CtRP2OqICWY/"
      >
      </blockquote>
      <script async src="//www.instagram.com/embed.js"></script>
    </section>
  );
}

export default GalleryPage;
// export default InstagramEmbed;


