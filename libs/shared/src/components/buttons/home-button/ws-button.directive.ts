import { computed, Directive, input, Input, signal } from '@angular/core';
import { wsStyle } from '../../../styles/ws-style';
import { cva, VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';

export const buttonVariants = cva('btn', {
  variants: {
    variant: {
      default: '',
      glass: 'glass',
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      link: 'btn-link',
      square: 'btn-square',
      circle: 'btn-circle',
    },
    color: {
      default: '',
      neutral: 'btn-neutral',
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      accent: 'btn-accent',
      info: 'btn-info',
      success: 'btn-success',
      warning: 'btn-warning',
      error: 'btn-error',
      base: 'btn-base-100',
    },
    size: {
      default: '',
      xs: 'btn-xs',
      sm: 'btn-sm',
      lg: 'btn-lg',
      wide: 'btn-wide',
      block: 'btn-block',
      responsive: 'btn-xs sm:btn-sm md:btn-md lg:btn-lg',
    },
    mode: {
      default: '',
      active: 'btn-active',
      disabled: 'btn-disabled',
    },
  },
  defaultVariants: {
    variant: 'default',
    color: 'default',
    size: 'default',
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
  selector: '[wsBtn]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class WsButtonDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    wsStyle(
      buttonVariants({
        variant: this._variant(),
        size: this._size(),
        color: this._color(),
        mode: this._mode(),
      }),
      this._settableClass(),
      this.userClass()
    )
  );

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }

  private readonly _variant = signal<ButtonVariants['variant']>('default');
  @Input()
  set variant(variant: ButtonVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _color = signal<ButtonVariants['color']>('default');
  @Input()
  set color(color: ButtonVariants['color']) {
    this._color.set(color);
  }

  private readonly _size = signal<ButtonVariants['size']>('default');
  @Input()
  set size(size: ButtonVariants['size']) {
    this._size.set(size);
  }

  private readonly _mode = signal<ButtonVariants['mode']>('default');
  @Input()
  set mode(mode: ButtonVariants['mode']) {
    this._mode.set(mode);
  }
}
