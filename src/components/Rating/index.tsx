import React from 'react'
import { FaStar } from 'react-icons/fa'
import { RatingContainer, RatingValue } from './RatingStyles'

type RatingProps = {
  value: number
}

const Rating: React.FC<RatingProps> = ({ value }) => (
  <RatingContainer>
    <RatingValue>{value}</RatingValue>
    <FaStar />
  </RatingContainer>
)

export default Rating
