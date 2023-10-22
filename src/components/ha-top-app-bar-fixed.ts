import { TopAppBarFixed } from "@material/mwc-top-app-bar-fixed";
import { css } from "lit";
import { customElement } from "lit/decorators";

@customElement("ha-top-app-bar-fixed")
export class HaTopAppBarFixed extends TopAppBarFixed {
  static override styles = [
    ...super.styles,
    css`
      .mdc-top-app-bar__row {
        height: var(--header-height);
        border-bottom: var(--app-header-border-bottom);
      }
      .mdc-top-app-bar--fixed-adjust {
        padding-top: var(--header-height);
      }
      .mdc-top-app-bar {
        --mdc-typography-headline6-font-weight: 400;
        color: var(--app-header-text-color, var(--mdc-theme-on-primary, #fff));
        background-color: var(
          --app-header-background-color,
          var(--mdc-theme-primary)
        );
      }
    `,
  ];
}

declare global {
  interface HTMLElementTagNameMap {
    "ha-top-app-bar-fixed": HaTopAppBarFixed;
  }
}
