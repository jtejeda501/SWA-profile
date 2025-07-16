import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"


export default function ContactAlertModal({ onClose, onContactForm }) {
  return (
    <AlertDialog open>
      <AlertDialogContent className="bg-[#0a1629] border border-[#fdb86b] rounded-xl shadow-2xl text-[#fdb86b] p-6">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-lg font-bold text-[#fdb86b]">Does my profile interest you?</AlertDialogTitle>
          <AlertDialogDescription className="text-base text-[#fdb86b] opacity-80 mt-2">
            {"I'd appreciate hearing if my profile aligns with your interests."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-transparent border border-[#fdb86b] text-[#fdb86b] hover:bg-[#fdb86b] hover:text-[#0a1629] transition-colors font-medium mr-2"
            >
              Cancel
            </button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <button
              type="button"
              onClick={() => {
                onClose();
                onContactForm()}}
              className="px-4 py-2 rounded-md bg-[#fdb86b] text-[#0a1629] font-bold shadow hover:bg-[#fdb86b]/80 transition-colors"
            >
              Continue
            </button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
