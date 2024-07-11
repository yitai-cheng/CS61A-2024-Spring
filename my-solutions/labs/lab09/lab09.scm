(define (over-or-under num1 num2) (cond
                                    ((< num1 num2) -1)
                                    ((= num1 num2) 0)
                                    ((> num1 num2) 1)
                                    )
  )
(define (make-adder num) (
                           define (adder inc) (
                                                + num inc
                                                )
                           )
  adder
  )

(define (composed f g) (
                         define (h x) (
                                        f (g x)
                                        )
                         )
  h
  )

(define (repeat f n) (
                       if (> n 0) (
                                    composed f (repeat f (- n 1))
                                    )
                       (lambda (x) x)

                       )
  )

(define (max a b)
  (if (> a b)
      a
      b))

(define (min a b)
  (if (> a b)
      b
      a))

(define (gcd a b) (
                    cond ((and (> a b) (= 0 (modulo a b))) b)
                    ((and (< a b) (= 0 (modulo b a))) a)
                    ((and (> a b) (< 0 (modulo a b))) (gcd b (modulo a b)))
                    ((and (< a b) (< 0 (modulo b a))) (gcd a (modulo b a)))
                    )
  )
