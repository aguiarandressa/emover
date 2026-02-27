#!/usr/bin/env python3
"""Lint de HTML local para ambientes sem htmlhint (checagens estruturais básicas)."""

from __future__ import annotations

import re
from pathlib import Path

HTML_FILES = sorted(Path('.').glob('*.html'))


def check_file(path: Path) -> list[str]:
    text = path.read_text(encoding='utf-8')
    errors: list[str] = []

    # doctype-first
    first_non_empty = next((line.strip() for line in text.splitlines() if line.strip()), '')
    if first_non_empty.lower() != '<!doctype html>':
        errors.append('doctype-first: primeira linha útil deve ser <!DOCTYPE html>.')

    # title-require
    if not re.search(r'<title>.*?</title>', text, flags=re.IGNORECASE | re.DOTALL):
        errors.append('title-require: tag <title> ausente.')

    # html lang
    if not re.search(r'<html\b[^>]*\blang="[^"]+"', text, flags=re.IGNORECASE):
        errors.append('html-lang: atributo lang ausente na tag <html>.')

    # id-unique
    ids = re.findall(r'\bid="([^"]+)"', text)
    dups = sorted({i for i in ids if ids.count(i) > 1})
    if dups:
        errors.append(f'id-unique: ids duplicados {dups}.')

    # alt-require for <img>
    for img in re.finditer(r'<img\b[^>]*>', text, flags=re.IGNORECASE):
        tag = img.group(0)
        if not re.search(r'\balt="[^"]*"', tag, flags=re.IGNORECASE):
            errors.append(f'alt-require: <img> sem alt -> {tag[:80]}...')

    # buttons should have type
    for btn in re.finditer(r'<button\b[^>]*>', text, flags=re.IGNORECASE):
        tag = btn.group(0)
        if not re.search(r'\btype="[^"]+"', tag, flags=re.IGNORECASE):
            errors.append(f'button-type: <button> sem type -> {tag[:80]}...')

    return errors


def main() -> int:
    all_errors: list[tuple[str, str]] = []
    for file in HTML_FILES:
        for err in check_file(file):
            all_errors.append((file.as_posix(), err))

    if all_errors:
        print('Falhas de lint HTML:')
        for file, err in all_errors:
            print(f'- {file}: {err}')
        return 1

    print('Lint HTML OK (checagens estruturais básicas).')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
