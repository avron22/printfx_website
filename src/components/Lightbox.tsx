import { useEffect } from "react";

interface LightboxProps {
  src: string;
  alt?: string;
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ src, alt, isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;
    return (
        <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80"
        onClick={onClose}
        >
        <div
            className="relative max-w-6xl max-h-[90vh] w-full flex justify-center"
            onClick={(e) => e.stopPropagation()}>
            <img
                src={src}
                alt={alt}
                className="rounded-lg shadow-lg max-h-[90vh] object-contain"
            />
            <button
                onClick={onClose}
                className="absolute top-0 right-3 text-white text-3xl bg-black/50 rounded-full px-3 py-1 hover:bg-black/70 cursor-pointer"
            >
            X
            </button>
        </div>
        </div>
    );
};

export default Lightbox;
