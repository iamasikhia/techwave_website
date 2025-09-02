type Props = {
  isOpen: boolean
  title?: string
  message?: string
  onClose: () => void
}

export default function SuccessModal({ isOpen, title = 'Success', message = '', onClose }: Props) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-[440px] max-w-[95%] p-6 shadow-2xl">
        <div className="text-center">
          <div className="mb-4">
            <div className="w-10 h-10 rounded-full bg-emerald-400 mx-auto mb-2" />
          </div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-slate-500 mb-6">{message}</p>
          <div className="flex items-center justify-center">
            <button onClick={onClose} className="px-6 py-2 rounded-full bg-black text-white">Ok</button>
          </div>
        </div>
      </div>
    </div>
  )
}
