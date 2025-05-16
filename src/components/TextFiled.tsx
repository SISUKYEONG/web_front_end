// import styles from './TextFiled.module.css'
// Styled Component
// Emotion
// Tailwind CSS
// Vanilla Extract + 타입 안정성! - 별도 파일 구분

export default function TextFiled({
  label,
  hint,
  value,
  onChange,
  deleteValue,
  ...restProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  deleteValue: () => void
}) {
  return (
    <div>
      <label className="block">
        {label && <span>{label}</span>}
        <input
          className="w-[100%] border-1 border-gray-400"
          {...restProps}
          value={value}
          onChange={onChange}
        />
      </label>
      <button
        className="bg-red-300 text-white"
        onClick={deleteValue}>
        삭제
      </button>
      {hint && <p>{hint}</p>}
    </div>
  )
}
