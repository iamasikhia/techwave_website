import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface LogoutConfirmModalProps {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function LogoutConfirmModal({ open, onConfirm, onCancel }: LogoutConfirmModalProps) {
  // close on Esc
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onCancel(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onCancel]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in"
        onClick={onCancel}
      />
      <div
        className="relative w-[340px] sm:w-[400px] rounded-2xl bg-white shadow-lg p-6 flex flex-col items-center text-center scale-95 opacity-0 animate-[zoomFade_.25s_ease_forwards]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="logout-modal-title"
      >
        <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-5">
          <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center text-white text-xl font-bold select-none">
            !
          </div>
        </div>
        <h2 id="logout-modal-title" className="text-lg font-semibold mb-2">Logout?</h2>
        <p className="text-sm text-gray-500 mb-6">Are you sure you want to logout?</p>
        <div className="flex w-full gap-3">
          <Button
            variant="outline"
            onClick={onCancel}
            className="flex-1 rounded-full border-gray-300 text-gray-700 bg-white hover:bg-gray-100"
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirm}
            className="flex-1 rounded-full bg-black hover:bg-black/80 text-white"
          >
            Yes, Logout
          </Button>
        </div>
      </div>
      <style>{`
        @keyframes zoomFade { 0% { opacity:0; transform:scale(.95);} 100% { opacity:1; transform:scale(1);} }
      `}</style>
    </div>
  );
}
