export default function ChatBubble({ sender, time, message, isSelf = false }) {
  return (
    <div class={`flex flex-col mb-4 ${isSelf ? 'items-end' : 'items-start'}`}>
      <div class="flex items-center space-x-2 mb-1">
        <span class="font-grotesk font-extrabold text-xs text-navy">{sender}</span>
        <span class="font-mono text-[10px] text-navy-muted">{time}</span>
      </div>
      <div
        class={`max-w-md p-4 rounded-2xl border-3 border-navy shadow-pop font-body text-sm text-navy ${
          isSelf ? 'bg-yellow rounded-tr-none' : 'bg-parchment-card rounded-tl-none'
        }`}
      >
        {message}
      </div>
    </div>
  );
}
