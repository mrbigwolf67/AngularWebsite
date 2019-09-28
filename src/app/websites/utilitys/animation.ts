import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate
} from '@angular/animations';
export const listAnimation =
trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(-50px)' }),
        stagger(
          '150ms',
          animate(
            '500ms ease-in',
            style({ opacity: 1, transform: 'translateY(0px)' })
          )
        )
      ],
      { optional: true }
    ),
    query(
      ':leave',
      [animate('500ms', style({ opacity: 0, transform: 'rotate(90deg)' }))],
      {
        optional: true,
      },
    )
  ])
])
