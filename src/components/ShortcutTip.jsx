export default function ShortcutTip({ keys, label }) {
  return (
    <div className="flex items-center gap-1">
      <kbd className="bg-gray-700 px-2 py-1 rounded border border-gray-500 shadow-inner">
        {keys}
      </kbd>
      <span>→ {label}</span>
    </div>
  );
}
