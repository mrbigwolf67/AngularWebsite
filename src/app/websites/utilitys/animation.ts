import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
  animateChild,
  group
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
      [animate('500ms', style({ opacity: 0, transform: 'rotateY(90deg)' }))],
      {
        optional: true,
      },
    )
  ])
]);

// Routable animations
export const slideInAnimation =
  trigger('routeAnimation', [
    transition('articles <=> article', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
