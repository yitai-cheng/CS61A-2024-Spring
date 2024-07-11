test = {
  'name': 'Problem 4',
  'points': 2,
  'suites': [
    {
      'cases': [
        {
          'answer': 'e92e90f58a272e7a74651635251ade14',
          'choices': [
            r"""
            Pair(A, Pair(B, nil)), where:
                A is the symbol being bound,
                B is an expression whose value should be evaluated and bound to A
            """,
            r"""
            Pair(A, Pair(B, nil)), where:
                A is the symbol being bound,
                B is the value that should be bound to A
            """,
            r"""
            Pair(A, B), where:
                A is the symbol being bound,
                B is the value that should be bound to A
            """,
            r"""
            Pair(A, B), where:
                A is the symbol being bound,
                B is an expression whose value should be evaluated and bound to A
            """,
            r"""
            Pair('define', Pair(A, Pair(B, nil))), where:
                A is the symbol being bound,
                B is an expression whose value should be evaluated and bound to A
            """
          ],
          'hidden': False,
          'locked': True,
          'multiline': False,
          'question': 'What is the structure of the expressions argument to do_define_form?'
        },
        {
          'answer': '0ed53dce7bacc4766422abc478c5c895',
          'choices': [
            'make_child_frame',
            'define',
            'lookup',
            'bindings'
          ],
          'hidden': False,
          'locked': True,
          'multiline': False,
          'question': r"""
          What method of a Frame instance will bind
          a value to a symbol in that frame?
          """
        }
      ],
      'scored': False,
      'type': 'concept'
    },
    {
      'cases': [
        {
          'code': r"""
          scm> (define size 2)
          cc3c061fb8167d02a4ddda1f1c19966e
          # locked
          scm> size
          2b7cdec3904f986982cbd24a0bc12887
          # locked
          scm> (define x (+ 7 3))
          38ba916dc1f41eb239567ee41a251ecd
          # locked
          scm> x
          4bc2fb48972a5d1ec1201b01e766a044
          # locked
          """,
          'hidden': False,
          'locked': True,
          'multiline': False
        },
        {
          'code': r"""
          scm> (define x (+ 2 3))
          x
          scm> x
          5
          scm> (define x (+ 2 7))
          x
          scm> x
          9
          scm> (eval (define tau 6.28))
          6.28
          """,
          'hidden': False,
          'locked': False,
          'multiline': False
        },
        {
          'code': r"""
          scm> (define pi 3.14159)
          pi
          scm> (define radius 10)
          radius
          scm> (define area (* pi (* radius radius)))
          area
          scm> area
          314.159
          scm> (define radius 100)
          radius
          scm> radius
          100
          scm> area
          314.159
          """,
          'hidden': False,
          'locked': False,
          'multiline': False
        },
        {
          'code': r"""
          scm> (define 0 1)
          SchemeError
          scm> (define error (/ 1 0))
          SchemeError
          """,
          'hidden': False,
          'locked': False,
          'multiline': False
        },
        {
          'code': r"""
          scm> (define x 0)
          x
          scm> ((define x (+ x 1)) 2)
          SchemeError
          scm> x
          1
          scm> (define x 2 y 4)
          SchemeError
          """,
          'hidden': False,
          'locked': False,
          'multiline': False
        },
        {
          'code': r"""
          scm> (define x 15)
          x
          scm> (define y (* 2 x))
          y
          scm> y
          30
          scm> (+ y (* y 2) 1)
          91
          scm> (define x 20)
          x
          scm> x
          20
          """,
          'hidden': False,
          'locked': False,
          'multiline': False
        },
        {
          'code': r"""
          scm> (define x 0)
          x
          scm> ((define x (+ x 1)) 2)
          SchemeError
          scm> x
          1
          """,
          'hidden': False,
          'locked': False,
          'multiline': False
        }
      ],
      'scored': True,
      'setup': '',
      'teardown': '',
      'type': 'scheme'
    }
  ]
}
