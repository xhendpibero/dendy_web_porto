"use client";

import Logo from "../logo";
import { getImgPath } from "@/utils/image";

const Header = () => {
    const handleDownloadPDF = () => {
        // Get the PDF path with proper basePath handling
        const pdfPath = getImgPath("/_1_Dendy_Sapto_Adi-CV.pdf");
        
        // Create a temporary anchor element to trigger download
        const link = document.createElement("a");
        link.href = pdfPath;
        link.download = "Dendy_Sapto_Adi_CV.pdf"; // Set the download filename
        link.target = "_blank"; // Open in new tab as fallback
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <header className="navbar top-0 left-0 z-999 w-full absolute">
            <div className="container">
                <nav className="py-7">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div>
                            <Logo />
                        </div>

                        <button
                            onClick={handleDownloadPDF}
                            className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                        >
                            <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                                Download PDF Resume
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
