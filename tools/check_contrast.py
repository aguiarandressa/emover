#!/usr/bin/env python3
"""Validação simples de contraste WCAG AA para combinações de cores usadas no projeto."""

from __future__ import annotations


def hex_to_rgb(value: str) -> tuple[float, float, float]:
    value = value.strip().lstrip('#')
    if len(value) != 6:
        raise ValueError(f'Cor inválida: {value}')
    r = int(value[0:2], 16) / 255
    g = int(value[2:4], 16) / 255
    b = int(value[4:6], 16) / 255
    return r, g, b


def linearize(c: float) -> float:
    return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4


def luminance(hex_color: str) -> float:
    r, g, b = hex_to_rgb(hex_color)
    rl, gl, bl = linearize(r), linearize(g), linearize(b)
    return 0.2126 * rl + 0.7152 * gl + 0.0722 * bl


def contrast_ratio(c1: str, c2: str) -> float:
    l1, l2 = luminance(c1), luminance(c2)
    lighter, darker = max(l1, l2), min(l1, l2)
    return (lighter + 0.05) / (darker + 0.05)


def main() -> int:
    pairs = [
        ('#0f172a', '#f8fafb', 'Texto padrão home (escuro em claro)'),
        ('#f8fafb', '#0f172a', 'Texto padrão home dark'),
        ('#221610', '#f8f6f6', 'Texto padrão internas (escuro em claro)'),
        ('#f8f6f6', '#221610', 'Texto padrão internas dark'),
        ('#ffffff', '#ec5b13', 'Texto branco em botão primary internas'),
        ('#ffffff', '#4fb3bf', 'Texto branco em botão primary home'),
        ('#2d9da6', '#ffffff', 'Texto secondary em fundo branco'),
    ]

    min_ratio = 4.5
    failed = []

    for fg, bg, label in pairs:
        ratio = contrast_ratio(fg, bg)
        ok = ratio >= min_ratio
        status = 'OK' if ok else 'FALHOU'
        print(f'{status:7} {ratio:0.2f}:1  {label}')
        if not ok:
            failed.append((label, ratio))

    if failed:
        print('\nCombinações com contraste abaixo de 4.5:1:')
        for label, ratio in failed:
            print(f'- {label}: {ratio:0.2f}:1')
        return 1

    print('\nTodas as combinações verificadas atendem WCAG AA (texto normal).')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
