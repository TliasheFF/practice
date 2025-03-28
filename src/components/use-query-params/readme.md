# Задача: Оптимизация поиска с useDeferredValue

## Условие:

Напиши универсальный хук useQueryParams<T>, который:

- Позволяет устанавливать параметры в URL (setQueryParam).
- Позволяет получать параметры из URL (getQueryParam).
- Гарантирует строгую типизацию:
  1. setQueryParam принимает объект с параметрами, определяя возможные ключи динамически.
  2. getQueryParam предлагает только те ключи, которые были установлены через setQueryParam.

## Требования к решению:

Создай хук useQueryParams<T>, который возвращает:

- setQueryParam: Функция, принимающая объект { key: значение } и обновляющая параметры в URL.
- getQueryParam: Функция, принимающая ключ из доступных параметров и возвращающая его значение.

Обеспечь динамическую типизацию:

- При вызове setQueryParam({ page: "1", search: "React" }) TypeScript автоматически определяет доступные ключи ("page" | "search").
- После этого getQueryParam принимает только "page" или "search", но не "invalidKey".

## Пример работы

- Пользователь вызывает setQueryParam({ page: "2", filter: "active" }).
- URL обновляется, добавляя ?page=2&filter=active.
- getQueryParam("page") → возвращает "2", но getQueryParam("unknown") выдает ошибку в TypeScript.
