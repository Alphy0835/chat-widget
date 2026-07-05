Status: draft
Source of truth: yes
Update together with: docs/quality/testing-strategy.md
Update trigger: new feature / changed flow / changed API / changed security logic

<!-- test-matrix.md — добавлять, когда фич много и проверки начинают путаться. Матрица связывает фичи, типы тестов, окружения и критичность. -->

# Test Matrix

## Purpose

Файл фиксирует, какие фичи и пользовательские сценарии чем проверяются.

## Test Types

Unit / Integration / API / E2E / Manual / Regression / Security / Performance

## Environments

local / dev / staging / production smoke

## Coverage Matrix

| Feature ID | Feature | Criticality | Tests | Environment | Release Gate | Related Docs | Status |
|---|---|---|---|---|---|---|---|
|  |  | low / medium / high | unit / api / e2e / manual / security |  | yes / no |  |  |

## Critical Flows

| Flow ID | Flow | Related Features | Required Tests | Release Gate | Status |
|---|---|---|---|---|---|
|  |  |  |  | yes / no |  |

## Gaps

| Gap ID | Area | Missing Coverage | Risk | Action | Status |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
