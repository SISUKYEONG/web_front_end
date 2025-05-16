import { useState, useEffect, useRef } from 'react'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'
import Button from '@/components/Button'
// import { useTodoStore, type Todo } from '@/stores/todo'

// JS 모듈 개념
// Default Export (기본 내보내기)
// Named Export (이름 내보내기)

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement | null>(null) //요소참조
  const updateTodo = useTodoStore(state => state.updateTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  useEffect(() => {
    if (isEditMode) {
      //포커스
      //요소참조
      inputRef.current?.focus()
    }
  }, [isEditMode])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.nativeEvent.isComposing) {
      return
    }
    if (e.key === 'Enter') {
      updateTodo({ ...todo, title })
    }
    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  function handleCancel() {
    setIsEditMode(false)
    setTitle(todo.title)
  }

  return (
    <div className="flex gap-[10px]">
      {isEditMode ? (
        <>
          <input
            ref={inputRef}
            className="rounded-md border-1 border-gray-400"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={() => updateTodo({ ...todo, title })}>저장</Button>
          <Button
            color="secondary"
            onClick={handleCancel}>
            취소
          </Button>
        </>
      ) : (
        <>
          <div>{todo.title}</div>
          <Button
            className="rounded-md bg-blue-500 px-2 text-white"
            onClick={() => setIsEditMode(true)}>
            수정
          </Button>
          <Button
            color="danger"
            onClick={() => deleteTodo(todo)}>
            삭제
          </Button>
        </>
      )}
    </div>
  )
}
