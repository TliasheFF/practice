# Задача: Оптимизация обработчиков событий с useCallback

## Условие:

Напиши два компонента:

- ParentComponent — содержит кнопку для обновления состояния (например, изменения счетчика).
- ChildComponent — получает через props функцию handleClick и вызывает ее при нажатии на кнопку.

Проблема: При каждом рендере ParentComponent передает новую функцию handleClick, из-за чего ChildComponent ререндерится.
Решение: Использовать useCallback, чтобы функция handleClick сохранялась между рендерами, если не меняются зависимости.

## Требования к решению:

Создай ParentComponent, который содержит:

- Счетчик (count), изменяемый кнопкой "Обновить счетчик".
- Функцию handleClick, передаваемую в ChildComponent.
- console.log("Parent re-rendered!"), чтобы отслеживать ререндер.

Создай ChildComponent, который:

- Получает через props handleClick и вызывает ее по нажатию.
- Оборачивается в React.memo, чтобы не ререндериться без необходимости.
- Выводит console.log("Child re-rendered!") при каждом ререндере.

Используй useCallback в ParentComponent, чтобы избежать ненужных ререндеров ChildComponent.

## Пример работы

- Пользователь нажимает "Обновить счетчик" → ParentComponent перерисовывается.
- Без useCallback → ChildComponent тоже ререндерится (так быть не должно).
- С useCallback → ChildComponent не ререндерится, если handleClick не изменился.
