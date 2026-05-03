import { useState, useRef } from "react";

const ChatInput = ({ onSend, disabled = false }) => {
  const [text, setText] = useState("");
  const [focused, setFocused] = useState(false);
  const textareaRef = useRef(null);

  const handleSend = () => {
    const trimmed = text.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setText("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
    // Auto-grow
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = "auto";
      ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
    }
  };

  const toolbarActions = [
    { icon: "attach_file", label: "Attach file" },
    { icon: "image", label: "Image" },
    { icon: "emoji_emotions", label: "Emoji" },
    { icon: "auto_awesome", label: "AI Assist" },
  ];

  return (
    <div
      className={`border-t border-neutral-200 bg-white px-[16px] pt-[12px] pb-[16px] transition-all ${
        focused ? "bg-white" : "bg-neutral-50"
      }`}
    >
      {/* Toolbar */}
      <div className="flex items-center gap-[2px] mb-[8px]">
        {toolbarActions.map((a) => (
          <button
            key={a.icon}
            title={a.label}
            className={`p-[6px] rounded-lg transition-colors text-neutral-400 hover:text-black hover:bg-neutral-100 ${
              a.icon === "auto_awesome"
                ? "ml-auto bg-neutral-100 text-black"
                : ""
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              {a.icon}
            </span>
          </button>
        ))}
      </div>

      {/* Textarea */}
      <div
        className={`flex items-end gap-[10px] border rounded-xl px-[14px] py-[10px] transition-all ${
          focused
            ? "border-black bg-white shadow-sm"
            : "border-neutral-200 bg-white"
        }`}
      >
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Type a message... (Enter to send, Shift+Enter for new line)"
          rows={1}
          disabled={disabled}
          className="flex-1 resize-none bg-transparent outline-none text-[13px] text-neutral-800 placeholder:text-neutral-400 leading-relaxed min-h-[22px] max-h-[120px] overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        />

        <button
          onClick={handleSend}
          disabled={!text.trim() || disabled}
          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${
            text.trim()
              ? "bg-black text-white hover:opacity-80 active:scale-95"
              : "bg-neutral-100 text-neutral-300 cursor-not-allowed"
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">send</span>
        </button>
      </div>

      <p className="text-[10px] text-neutral-300 mt-[6px] text-center">
        This conversation is being recorded for quality assurance.
      </p>
    </div>
  );
};

export default ChatInput;
