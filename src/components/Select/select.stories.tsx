import "../../index.css";
import * as Data from "@effect/data/Data";
import * as Optic from "@fp-ts/optic";
import { StoryDecorator } from "@ladle/react";
import { SelectFull } from "./vanilla";
import { SelectFull as _Strict } from "./strict";
import { Theme } from "../../css";

export default {
  decorators: [
    (Component) => (
      <div className={Theme.themeClass + " flex flex-col gap-4"}>
        <Component />
      </div>
    ),
  ] as StoryDecorator[],
};

interface Book extends Data.Case {
  readonly _tag: "Book";
  readonly author: string;
  readonly title: string;
}
const Book = Data.tagged<Book>("Book");

const books: Data.Data<ReadonlyArray<Book>> = Data.array([
  Book({
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
  }),
  Book({
    author: "Lev Tolstoy",
    title: "War and Peace",
  }),
  Book({
    author: "Fyodor Dostoyevsy",
    title: "The Idiot",
  }),
  Book({
    author: "Oscar Wilde",
    title: "A Picture of Dorian Gray",
  }),
  Book({
    author: "George Orwell",
    title: "1984",
  }),
  Book({
    author: "Jane Austen",
    title: "Pride and Prejudice",
  }),
  Book({
    author: "Marcus Aurelius",
    title: "Meditations",
  }),
  Book({
    author: "Fyodor Dostoevsky",
    title: "The Brothers Karamazov",
  }),
  Book({
    author: "Lev Tolstoy",
    title: "Anna Karenina",
  }),
  Book({
    author: "Fyodor Dostoevsky",
    title: "Crime and Punishment",
  }),
]);

export const Base = () => (
  <SelectFull
    items={books as unknown as Book[]}
    getItemKey={(b) => b.title}
    getItemTitle={(b) => b.title}
    getItemSubtitle={(b) => b.author}
  />
);

export const Disabled = () => (
  <SelectFull
    disabled
    items={books as unknown as Book[]}
    getItemKey={(b) => b.title}
    getItemTitle={(b) => b.title}
    getItemSubtitle={(b) => b.author}
  />
);

const _book = Optic.id<Book>();
const _title = _book.at("title");
const _author = _book.at("author");

export const Strict = () => (
  <_Strict
    items={books}
    getItemTitle={Optic.get(_title)}
    getItemSubtitle={Optic.get(_author)}
  />
);
