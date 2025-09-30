import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (rating: number, comment: string) => Promise<void>;
  cafeName: string;
  existingRating?: number;
  existingComment?: string;
}

export default function RatingDialog({
  open,
  onOpenChange,
  onSubmit,
  cafeName,
  existingRating,
  existingComment
}: RatingDialogProps) {
  const [rating, setRating] = useState(existingRating || 0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState(existingComment || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (rating === 0) return;
    
    setLoading(true);
    try {
      await onSubmit(rating, comment);
      onOpenChange(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rate {cafeName}</DialogTitle>
          <DialogDescription>
            Share your experience with other coffee lovers
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoveredRating(value)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none transition-transform hover:scale-110"
              >
                <Star
                  className={cn(
                    'h-10 w-10 transition-colors',
                    (hoveredRating >= value || rating >= value)
                      ? 'fill-warm-gold text-warm-gold'
                      : 'text-muted-foreground'
                  )}
                />
              </button>
            ))}
          </div>

          {rating > 0 && (
            <p className="text-center text-sm text-muted-foreground">
              {rating === 1 && 'Poor'}
              {rating === 2 && 'Fair'}
              {rating === 3 && 'Good'}
              {rating === 4 && 'Very Good'}
              {rating === 5 && 'Excellent'}
            </p>
          )}

          <div className="space-y-2">
            <Textarea
              placeholder="Tell us about your experience (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4}
              maxLength={500}
            />
            <p className="text-xs text-muted-foreground text-right">
              {comment.length}/500
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={rating === 0 || loading}
            className="flex-1"
          >
            {loading ? 'Submitting...' : 'Submit Rating'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}