const camera = document.getElementById("camera");
const layoutButtons = document.querySelectorAll(".layout-btn");

// Open camera accesss
const video = document.getElementById("camera");

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    }); //asking camera acess to the browser

    video.srcObject = stream; //show the camera
  } catch (error) {
    console.error("Unable to access camera:", error);
    alert("Camera access was denied or no camera was found.");
  }
}

startCamera();

// Camera layout setting
layoutButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const layout = button.dataset.layout;

    //2x2
    if (layout === "2x2") {
      camera.className =
        "w-[300px] h-[300px] bg-gray-200 rounded-xl object-cover transition-all duration-500";
    }
    // 4x4
    else if (layout === "4x4") {
      camera.className =
        "w-[500px] h-[500px] bg-gray-200 rounded-xl object-cover transition-all duration-500";
    }
    //6x4
    else if (layout === "6x4") {
      camera.className =
        "w-[700px] h-[500px] bg-gray-200 rounded-xl object-cover transition-all duration-500";
    }

    //camera layour button animations
    layoutButtons.forEach((btn) => {
      btn.classList.remove(
        "bg-[#23c483]",
        "text-white",
        "shadow-[0px_15px_20px_rgba(46,229,157,0.4)]",
      );
    });

    button.classList.add(
      "bg-[#23c483]",
      "text-white",
      "shadow-[0px_15px_20px_rgba(46,229,157,0.4)]",
    );
  });
});
